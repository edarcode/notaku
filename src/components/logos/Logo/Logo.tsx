import css from "./css.module.css";
import logo from "./notaku.jpeg";
import { motion } from "framer-motion";

export default function Logo() {
	return (
		<motion.img
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1, rotate: 360 }}
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.3 }}
			className={css.logo}
			src={logo}
			alt="logo notaku"
		/>
	);
}
