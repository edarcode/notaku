import Spinner from "../../../components/spinners/Spinner/Spinner";
import { formatDate } from "../../../utils/formatDate";
import Genres from "./Genres/Genres";
import { useAnimeById } from "./hooks/useAnimeById";
import css from "./css.module.css";
import AnimeHeader from "./AnimeHeader/AnimeHeader";
import { AnimeById } from "./service/fetchAnimeById";

export default function AnimeDetails() {
	const { isError, isLoading, anime } = useAnimeById();

	if (isError) return <div className={css.err}>Error cargando el anime</div>;
	if (isLoading) return <Spinner className={css.loading} />;
	if (!anime) return <div className={css.empty}>No se encontró el anime</div>;

	return (
		<article className={css.detail}>
			<AnimeHeader anime={anime as AnimeById} />
			<aside>
				<img src={anime.posterImage?.small} alt={anime.title} />
				<div>{anime.status}</div>
				<div>{anime.showType}</div>
			</aside>
			<main>
				<Genres genres={anime.genres} />
				<div>{anime.synopsis}</div>
				<div>{anime.episodeCount}</div>
				<span>
					<time dateTime={anime.startDate}>
						{formatDate(anime.startDate as string)}
					</time>
					<br />
					<time dateTime={anime.endDate as string}>
						{formatDate(anime.endDate as string)}
					</time>
				</span>
			</main>
		</article>
	);
}
