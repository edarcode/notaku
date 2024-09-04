import css from "./css.module.css";
import { useQuery } from "@tanstack/react-query";
import { getAnimes } from "./services/getAnimes";
import Spinner from "../../../components/spinners/Spinner/Spinner";

export default function Animes() {
	const {
		isLoading,
		isError,
		data: kitsuAnimes
	} = useQuery({
		queryKey: ["kitsuAnimes"],
		queryFn: () => getAnimes()
	});

	console.log(kitsuAnimes);

	if (isError) return <div className={css.err}>Error crgando animes</div>;
	if (isLoading)
		return (
			<div className={css.loading}>
				<Spinner />
			</div>
		);

	if (!kitsuAnimes || !kitsuAnimes.animes.length)
		return <div className={css.empty}>No hay animes</div>;

	return (
		<section className={css.animes}>
			{kitsuAnimes.animes.map(anime => (
				<div key={anime.id} className={css.anime}>
					<div className={css.title}>{anime.title}</div>
					<img
						className={css.img}
						src={anime.posterImage.small}
						alt={anime.title}
						loading="lazy"
					/>
				</div>
			))}
		</section>
	);
}
