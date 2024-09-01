import css from "./css.module.css";
import IconBtn from "../../../../components/buttons/IconBtn/IconBtn";
import { useEffect } from "react";
import { getTopAnimes } from "./services/getTopAnimes";

export default function TopAnimes() {
	useEffect(() => {
		const controller = new AbortController();
		getTopAnimes(controller.signal)
			.then(topAnimes => {
				console.log(topAnimes);
			})
			.catch(error => console.log(error));
	}, []);
	return (
		<article className={css.slider}>
			<IconBtn />
			<div>imgs</div>
			<IconBtn />
		</article>
	);
}
