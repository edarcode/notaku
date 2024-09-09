import css from "./css.module.css";
import { ARTICLE } from "../../../../database/article";
import { formatDate } from "../../../../utils/formatDate";
import { Link } from "react-router-dom";
import { ARTICLE_DETAILS } from "../../../router/children";

export default function Articles() {
	return (
		<section className={css.wrapper}>
			{ARTICLE.map(article => {
				if (!article.id) return null;
				return (
					<Link to={ARTICLE_DETAILS.to + article.id} key={article.id}>
						<article className={css.article}>
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
					</Link>
				);
			})}
		</section>
	);
}
