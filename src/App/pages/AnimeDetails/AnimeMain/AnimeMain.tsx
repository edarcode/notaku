import { formatDate } from "../../../../utils/formatDate";
import Genres from "../Genres/Genres";
import { AnimeById } from "../service/fetchAnimeById";
import css from "./css.module.css";

export default function AnimeMain({ anime }: Props) {
	return (
		<main className={css.main}>
			<div className={css.wrapper}>
				<Genres genres={anime.genres} />
				<div className={css.wrapper_synopsis}>
					<h4>Sinopsis</h4>
					<p className={css.synopsis}>{anime.synopsis}</p>
				</div>
				<div className={css.times}>
					<time dateTime={anime.startDate}>
						Inició {formatDate(anime.startDate as string)}
					</time>
					<time dateTime={anime.endDate as string}>
						Finalizó {formatDate(anime.endDate as string)}
					</time>
				</div>

				<div className={css.status}>{anime.status}</div>
				<span className={css.episodeCount}>{anime.episodeCount} CAP</span>
			</div>
		</main>
	);
}

type Props = {
	anime: AnimeById;
};
