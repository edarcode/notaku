import FilterAnimes from "./FilterAnimes/FilterAnimes";
import WrapperAnimes from "./WrapperAnimes/WrapperAnimes";
import css from "./css.module.css";
import { useAnimes } from "./hooks/useAnimes";

export default function Animes() {
	const { isError, isLoading, kitsuAnimePages, filterAnimes } = useAnimes();
	return (
		<section className={css.animes}>
			<FilterAnimes filterAnimes={filterAnimes} isLoading={isLoading} />
			<WrapperAnimes
				isError={isError}
				isLoading={isLoading}
				kitsuAnimePages={kitsuAnimePages}
			/>
		</section>
	);
}
