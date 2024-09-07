import AnimeFilters from "./AnimeFilters/AnimeFilters";
import WrapperAnimes from "./WrapperAnimes/WrapperAnimes";
import css from "./css.module.css";

export default function Animes() {
	return (
		<section className={css.animes}>
			<AnimeFilters />
			<WrapperAnimes />
		</section>
	);
}
