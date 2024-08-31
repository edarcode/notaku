import css from "./css.module.css";
import logo from "./notaku.jpeg";

export default function Logo() {
	return <img className={css.logo} src={logo} alt="logo notaku" />;
}
