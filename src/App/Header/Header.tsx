import css from "./css.module.css";
import Logo from "../../components/logos/Logo/Logo";

export default function Header() {
	return (
		<header className={css.header}>
			<Logo />
			<h1>Notaku</h1>
		</header>
	);
}
