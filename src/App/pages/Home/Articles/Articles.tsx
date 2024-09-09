import css from "./css.module.css";
import { ARTICLE } from "../../../../database/article";
import { formatDate } from "../../../../utils/formatDate";

export default function Articles() {
	return (
		<section className={css.wrapper}>
			{ARTICLE.map(article => (
				<article className={css.article} key={article.id}>
					<img
						className={css.img}
						src={article.coverImage.original}
						alt={article.title}
					/>
					<h3 className={css.title}>{article.title}</h3>
					<time className={css.time} dateTime={article.published}>
						{formatDate(article.published)}
					</time>
				</article>
			))}
		</section>
	);
}
