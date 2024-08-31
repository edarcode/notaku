import css from "./css.module.css";
import TheBestAnimes from "./TheBestAnimes/TheBestAnimes";

export default function Home() {
	return (
		<div className={css.home}>
			<TheBestAnimes />
		</div>
	);
}
