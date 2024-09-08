import { Link } from "react-router-dom";
import Spinner from "../../../../components/spinners/Spinner/Spinner";
import css from "./css.module.css";
import { ANIME_DETAILS } from "../../../router/children";
import { motion } from "framer-motion";
import { KitsuAnimePages } from "../hooks/useAnimes";

export default function WrapperAnimes({
	isError,
	isLoading,
	kitsuAnimePages
}: Props) {
	if (isError) return <div className={css.err}>Error cargando datos</div>;
	if (isLoading) return <Spinner className={css.loading} />;
	if (!kitsuAnimePages) return <div className={css.empty}>No hay datos</div>;

	return (
		<div className={css.wrapper}>
			{kitsuAnimePages.map(page =>
				page.animes.map(anime => (
					<motion.div
						key={anime.id}
						className={css.anime}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.25 }}
					>
						<div className={css.rating}>⭐{Number(anime.rating).toFixed()}</div>
						<Link to={ANIME_DETAILS.to + anime.id}>
							<img
								className={css.img}
								src={anime.posterImage?.small}
								alt={anime.title}
								loading="lazy"
							/>
						</Link>
						<div className={css.title}>
							{anime.title.split(" ", 4).join(" ")}
						</div>
					</motion.div>
				))
			)}
		</div>
	);
}

type Props = {
	isError: boolean;
	isLoading: boolean;
	kitsuAnimePages: KitsuAnimePages;
};
