import css from "./css.module.css";
import Logo from "../../components/logos/Logo/Logo";
import { Link } from "react-router-dom";
import { ANIME, HOME } from "../router/children";

export default function Header() {
	return (
		<header className={css.header}>
			<nav className={css.nav}>
				<Link className={css.logo} to={HOME.path}>
					<Logo />
				</Link>
				<Link to={HOME.path}>{HOME.display}</Link>
				<Link to={ANIME.path}>{ANIME.display}</Link>
			</nav>
		</header>
	);
}
