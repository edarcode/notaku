import Articles from "./Articles/Articles";
import css from "./css.module.css";
import TopAnimes from "./TopAnimes/TopAnimes";

export default function Home() {
	return (
		<div className={css.home}>
			<TopAnimes />
			<div className={css.titles}>
				<h1>Noticias Recientes</h1>
				<h2>Las últimas noticias del mundo anime y manga</h2>
			</div>
			<Articles />
		</div>
	);
}
