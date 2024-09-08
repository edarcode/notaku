import { formatDate } from "../../../utils/formatDate";
import Genres from "./Genres/Genres";
import { useAnimeById } from "./hooks/useAnimeById";

export default function AnimeDetails() {
	const { isError, isLoading, anime } = useAnimeById();

	if (isError) return <div>Error</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!anime) return <div>Anime no encontrado</div>;

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
