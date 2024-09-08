import Spinner from "../../../components/spinners/Spinner/Spinner";
import { formatDate } from "../../../utils/formatDate";
import Genres from "./Genres/Genres";
import { useAnimeById } from "./hooks/useAnimeById";
import css from "./css.module.css";

export default function AnimeDetails() {
	const { isError, isLoading, anime } = useAnimeById();

	if (isError) return <div className={css.err}>Error cargando el anime</div>;
	if (isLoading) return <Spinner className={css.loading} />;
	if (!anime) return <div className={css.empty}>No se encontró el anime</div>;

	return (
		<article>
			<img src={anime.coverImage?.original} alt={anime.title} />
			<img src={anime.posterImage?.small} alt={anime.title} />
			<div>{anime.title}</div>
			<div>{anime.synopsis}</div>
			<div>{anime.showType}</div>
			<div>⭐{Number(anime.rating).toFixed()}</div>
			<div>{anime.popularity}</div>
			<div>{anime.episodeCount}</div>
			<div>{anime.favoritesCount}</div>
			<div>{formatDate(anime.startDate as string)}</div>
			<div>{formatDate(anime.endDate as string)}</div>
			<div>{anime.status}</div>
			<Genres genres={anime.genres} />
		</article>
	);
}
