import Networks from "../../components/navs/Networks/Networks";
import css from "./css.module.css";

export default function Footer() {
	return (
		<footer className={css.footer}>
			<p>© Casi todos los derechos reservados.</p>
			<p>
				Creado por <strong>edarcode</strong>
			</p>
			<Networks />
		</footer>
	);
}
