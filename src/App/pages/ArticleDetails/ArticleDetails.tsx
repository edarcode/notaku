import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import { formatDate } from "../../../utils/formatDate";
import css from "./css.module.css";
import { useArticleById } from "./hooks/useArticleById";

export default function ArticleDetails() {
	const { isError, isLoading, article } = useArticleById();

	if (isError) return <div>Err</div>;
	if (isLoading) return <div>Cargando...</div>;
	if (!article) return <div>No existe el articulo</div>;

	return (
		<article className={css.article}>
			<header>
				<img src={article.coverImage.original} alt={article.title} />
				<h1>{article.title}</h1>
				<time dateTime={article.published}>
					{formatDate(article.published)}
				</time>{" "}
				<cite>{article.source}</cite>
			</header>
			<main>
				<p>{article.description}</p>
			</main>
			<footer>
				<address>Escrito por {article.author}</address>
				Basado en el{" "}
				<Hyperlink href={article.originalArticle}>Articulo original</Hyperlink>
			</footer>
		</article>
	);
}
