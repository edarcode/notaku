import { useParams } from "react-router-dom";
import css from "./css.module.css";

export default function ArticleDetails() {
	const { id } = useParams();
	return (
		<article className={css.article}>
			Aquí pintaré el articulo completo con id: {id}
		</article>
	);
}
