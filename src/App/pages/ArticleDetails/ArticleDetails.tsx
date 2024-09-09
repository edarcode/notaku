import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import { formatDate } from "../../../utils/formatDate";
import css from "./css.module.css";
import { useArticleById } from "./hooks/useArticleById";

export default function ArticleDetails() {
	const { isError, isLoading, article } = useArticleById();

	const CONTENT = article?.content.map(item => {
		if (item.type === "youtube") return <span>{item.youtubeId}</span>;
		if (item.type === "p") return <p>{item.text}</p>;
		return null;
	});

	if (isError) return <div>Err</div>;
	if (isLoading) return <div>Cargando...</div>;
	if (!article) return <div>No existe el articulo</div>;

	return (
		<article className={css.article}>
			<header className={css.header}>
				<img
					className={css.cover}
					src={article.coverImage.original}
					alt={article.title}
				/>
				<h1 className={css.title}>{article.title}</h1>
				<time className={css.time} dateTime={article.published}>
					{formatDate(article.published)}
				</time>{" "}
				<cite className={css.cite}>{article.source}</cite>
			</header>
			<main className={css.main}>
				<p className={css.description}>{article.description}</p>
				{CONTENT}
			</main>
			<footer className={css.footer}>
				<address>Escrito por {article.author}</address>
				Inspirado en{" "}
				<Hyperlink href={article.originalArticle}>Kudasai</Hyperlink>
			</footer>
		</article>
	);
}
