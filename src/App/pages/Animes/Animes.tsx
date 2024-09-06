import css from "./css.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAnimes } from "./services/getAnimes";
import Spinner from "../../../components/spinners/Spinner/Spinner";
import { KITSU } from "../../../kitsu/urls";
import { useScrollEnd } from "../../../hooks/useScrollEnd";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ANIME_DETAILS } from "../../router/children";

export default function Animes() {
	const isScrollAtEnd = useScrollEnd(50);
	const { isLoading, isError, data, fetchNextPage } = useInfiniteQuery({
		queryKey: ["kitsuAnimes"],
		queryFn: ({ pageParam }) => getAnimes(pageParam),
		initialPageParam: KITSU.animes,
		getNextPageParam: lastPage => lastPage.nextPage
	});

	useEffect(() => {
		if (isScrollAtEnd) {
			fetchNextPage();
		}
	}, [isScrollAtEnd]);

	if (isError) return <div className={css.err}>Error cargando animes</div>;
	if (isLoading)
		return (
			<div className={css.loading}>
				<Spinner />
			</div>
		);

	if (!data) return <div>No hay datos</div>;
	return (
		<section className={css.animes}>
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
								src={anime.posterImage.small}
								alt={anime.title}
								loading="lazy"
							/>
						</Link>
					</motion.div>
				))
			)}
		</section>
	);
}
