import { useQuery } from "@tanstack/react-query";
import Slider from "../../../../components/sliders/Slider/Slider";
import { getTopAnimes } from "./services/getTopAnimes";

export default function TopAnimes() {
	const {
		isLoading,
		isError,
		data: topAnimes
	} = useQuery({
		queryKey: ["topAnimes"],
		queryFn: getTopAnimes
	});

	if (isError) return <div>Error</div>;
	if (isLoading) return <div>Cargando...</div>;
	if (!topAnimes) return <div>No hay animes</div>;

	return (
		<Slider
			content={topAnimes.map(anime => ({
				id: anime.id,
				img: anime.coverImages.original,
				rating: anime.rating,
				title: anime.title
			}))}
		/>
	);
}
