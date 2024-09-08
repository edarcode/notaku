import Spinner from "../../../components/spinners/Spinner/Spinner";
import { useAnimeById } from "./hooks/useAnimeById";
import css from "./css.module.css";
import AnimeHeader from "./AnimeHeader/AnimeHeader";
import { AnimeById } from "./service/fetchAnimeById";
import AnimeAside from "./AnimeAside/AnimeAside";
import AnimeMain from "./AnimeMain/AnimeMain";

export default function AnimeDetails() {
	const { isError, isLoading, anime } = useAnimeById();

	if (isError) return <div className={css.err}>Error cargando el anime</div>;
	if (isLoading) return <Spinner className={css.loading} />;
	if (!anime) return <div className={css.empty}>No se encontró el anime</div>;

	return (
		<article className={css.detail}>
			<AnimeHeader anime={anime as AnimeById} />
			<AnimeAside anime={anime as AnimeById} />
			<AnimeMain anime={anime as AnimeById} />
		</article>
	);
}
