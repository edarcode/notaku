import { Link } from "react-router-dom";
import Spinner from "../../../../components/spinners/Spinner/Spinner";
import { useAnimes } from "../hooks/useAnimes";
import css from "./css.module.css";
import { ANIME_DETAILS } from "../../../router/children";
import { motion } from "framer-motion";

export default function WrapperAnimes() {
	const { isError, isLoading, data } = useAnimes();

	if (isError) return <div className={css.err}>Error cargando datos</div>;
	if (isLoading) return <Spinner className={css.loading} />;
	if (!data) return <div className={css.empty}>No hay datos</div>;

	return (
		<div className={css.animes}>
			{data.pages.map(page =>
				page.animes.map(anime => (
					<motion.div
						key={anime.id}
						className={css.anime}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.25 }}
					>
						<div className={css.title}>
							{anime.title.split(" ", 2).join(" ")}
						</div>
						<Link to={ANIME_DETAILS.to + anime.id}>
							<img
								className={css.img}
								src={anime.posterImage?.small}
								alt={anime.title}
								loading="lazy"
							/>
						</Link>
					</motion.div>
				))
			)}
		</div>
	);
}
