import AnimeFilters from "./AnimeFilters/AnimeFilters";
import WrapperAnimes from "./WrapperAnimes/WrapperAnimes";
import css from "./css.module.css";
import { useAnimes } from "./hooks/useAnimes";

export default function Animes() {
	const { isError, isLoading, kitsuAnimePages, filterAnimes } = useAnimes();
	return (
		<section className={css.animes}>
			<AnimeFilters filterAnimes={filterAnimes} />
			<WrapperAnimes
				isError={isError}
				isLoading={isLoading}
				kitsuAnimePages={kitsuAnimePages}
			/>
		</section>
	);
}
