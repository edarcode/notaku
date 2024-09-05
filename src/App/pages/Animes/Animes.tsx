import css from "./css.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAnimes } from "./services/getAnimes";
import Spinner from "../../../components/spinners/Spinner/Spinner";
import { KITSU } from "../../../kitsu/urls";
import { useScrollEnd } from "../../../hooks/useScrollEnd";
import { useEffect } from "react";

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
					<div key={anime.id} className={css.anime}>
						<div className={css.title}>{anime.title}</div>
						<img
							className={css.img}
							src={anime.posterImage.small}
							alt={anime.title}
							loading="lazy"
						/>
					</div>
				))
			)}
		</section>
	);
}
