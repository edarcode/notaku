import { AnimeById } from "../service/fetchAnimeById";
import css from "./css.module.css";

export default function AnimeAside({ anime }: Props) {
	return (
		<aside className={css.aside}>
			<img src={anime.posterImage?.original} alt={anime.title} />
			<div className={css.show}>{anime.showType}</div>
		</aside>
	);
}

type Props = {
	anime: AnimeById;
};
