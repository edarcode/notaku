import css from "./css.module.css";
import TopAnimes from "./TopAnimes/TopAnimes";

export default function Home() {
	return (
		<div className={css.home}>
			<TopAnimes />
		</div>
	);
}
