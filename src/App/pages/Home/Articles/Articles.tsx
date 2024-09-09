import css from "./css.module.css";
import { ARTICLE } from "../../../../database/article";
import { formatDate } from "../../../../utils/formatDate";

export default function Articles() {
	return (
		<section className={css.wrapper}>
			{ARTICLE.map(article => (
				<article className={css.article}>
					<img src={article.coverImage.original} alt={article.title} />
					<h3>{article.title}</h3>
					<time dateTime={article.published}>
						{formatDate(article.published)}
					</time>
				</article>
			))}
		</section>
	);
}
