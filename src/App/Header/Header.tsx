import css from "./css.module.css";
import Logo from "../../components/logos/Logo/Logo";
import { Link } from "react-router-dom";
import { ANIME, HOME } from "../router/children";
import LinkTo from "../../components/links/LinkTo/LinkTo";

export default function Header() {
	return (
		<header className={css.header}>
			<nav className={css.nav}>
				<Link className={css.logo} to={HOME.path}>
					<Logo />
				</Link>
				<LinkTo to={HOME.path}>{HOME.display}</LinkTo>
				<LinkTo to={ANIME.path}>{ANIME.display}</LinkTo>
			</nav>
		</header>
	);
}