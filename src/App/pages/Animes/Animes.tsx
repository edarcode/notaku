import InputText from "../../../components/inputs/InputText/InputText";
import WrapperAnimes from "./WrapperAnimes/WrapperAnimes";
import css from "./css.module.css";

export default function Animes() {
	return (
		<section className={css.animes}>
			<form className={css.form}>
				<InputText />
			</form>
			<WrapperAnimes />
		</section>
	);
}
