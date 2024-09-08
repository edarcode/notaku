import { formatDate } from "../../../../utils/formatDate";
import Genres from "../Genres/Genres";
import { AnimeById } from "../service/fetchAnimeById";
import css from "./css.module.css";

export default function AnimeMain({ anime }: Props) {
	return (
		<main className={css.main}>
			<div className={css.wrapper}>
				<h4>Sinopsis</h4>
				<Genres genres={anime.genres} />
				<p>{anime.synopsis}</p>
				<span className={css.episodeCount}>Total cap {anime.episodeCount}</span>
				<div className={css.times}>
					<time dateTime={anime.startDate}>
						Inició {formatDate(anime.startDate as string)}
					</time>
					<time dateTime={anime.endDate as string}>
						Finalizó {formatDate(anime.endDate as string)}
					</time>
				</div>
			</div>
		</main>
	);
}

type Props = {
	anime: AnimeById;
};
