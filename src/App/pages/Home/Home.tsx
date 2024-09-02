import Btn from "../../../components/buttons/Btn/Btn";
import css from "./css.module.css";
import TopAnimes from "./TopAnimes/TopAnimes";

export default function Home() {
	return (
		<div className={css.home}>
			<TopAnimes />
			<Btn className={css.btn}>Hola</Btn>
		</div>
	);
}
