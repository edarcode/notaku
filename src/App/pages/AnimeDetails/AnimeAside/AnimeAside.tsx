import { AnimeById } from "../service/fetchAnimeById";
import css from "./css.module.css";

export default function AnimeAside({ anime }: Props) {
	return (
		<aside className={css.aside}>
			<img src={anime.posterImage?.small} alt={anime.title} />
			<div>{anime.showType}</div>
		</aside>
	);
}

type Props = {
	anime: AnimeById;
};
