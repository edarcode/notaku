import { formatDate } from "../../../../utils/formatDate";
import Genres from "../Genres/Genres";
import { AnimeById } from "../service/fetchAnimeById";
import css from "./css.module.css";

export default function AnimeMain({ anime }: Props) {
	return (
		<main className={css.main}>
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
	);
}

type Props = {
	anime: AnimeById;
};
