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
		<article className={css.detail}>
			<header>
				<img src={anime.coverImage?.original} alt={anime.title} />
				<div>{anime.title}</div>
				<div>⭐{Number(anime.rating).toFixed()}</div>
				<div>{anime.popularity}</div>
				<div>{anime.favoritesCount}</div>
			</header>
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
					<time dateTime={anime.endDate as string}>
						{formatDate(anime.endDate as string)}
					</time>
				</span>
			</main>
		</article>
	);
}
