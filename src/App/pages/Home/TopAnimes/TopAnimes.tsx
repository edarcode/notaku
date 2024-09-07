import { useQuery } from "@tanstack/react-query";
import Slider from "./Slider/Slider";
import { getTopAnimes } from "./services/getTopAnimes";
import Spinner from "../../../../components/spinners/Spinner/Spinner";
import css from "./css.module.css";

export default function TopAnimes() {
	const {
		isLoading,
		isError,
		data: topAnimes
	} = useQuery({
		queryKey: ["topAnimes"],
		queryFn: getTopAnimes
	});

	if (isError) return <div className={css.err}>Error cargando animes</div>;
	if (isLoading)
		return (
			<div className={css.loading}>
				<Spinner />
			</div>
		);
	if (!topAnimes || !topAnimes.length)
		return <div className={css.empty}>No hay animes</div>;

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
