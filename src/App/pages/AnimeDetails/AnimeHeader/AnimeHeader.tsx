import { AnimeById } from "../service/fetchAnimeById";
import css from "./css.module.css";

export default function AnimeHeader({ anime }: Props) {
	return (
		<header className={css.header}>
			<img
				className={css.cover}
				src={anime.coverImage?.original}
				alt={anime.title}
			/>
			<h1 className={css.title}>🪧{anime.title}</h1>
			<div className={css.stats}>
				<div className={css.rating}>⭐{Number(anime.rating).toFixed()}</div>
				<div className={css.fans}>{anime.favoritesCount} FANS</div>
				<div className={css.popularity}>#{anime.popularity}</div>
			</div>
		</header>
	);
}

type Props = {
	anime: AnimeById;
};
