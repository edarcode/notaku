import css from "./css.module.css";
import IconBtn from "../../../../components/buttons/IconBtn/IconBtn";
import { getTopAnimes } from "./services/getTopAnimes";
import { useQuery } from "@tanstack/react-query";

export default function TopAnimes() {
	const {
		isLoading,
		isError,
		data: topAnimes
	} = useQuery({
		queryKey: ["topAnimes"],
		queryFn: getTopAnimes
	});

	if (isError) return <span>Err</span>;
	if (isLoading) return <span>Cargando...</span>;
	if (!topAnimes) return null;

	return (
		<article className={css.slider}>
			<IconBtn />
			<div>
				{topAnimes.map(anime => (
					<div key={anime.id}>
						<img src={anime.coverImages.original} alt={anime.title} />
						<div>{anime.title}</div>
						<div>{anime.rating}</div>
						<div>{anime.synopsis}</div>
					</div>
				))}
			</div>
			<IconBtn />
		</article>
	);
}
