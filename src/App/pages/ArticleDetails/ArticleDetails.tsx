import { DOMAttributes } from "react";
import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import { formatDate } from "../../../utils/formatDate";
import css from "./css.module.css";
import { useArticleById } from "./hooks/useArticleById";
import "@justinribeiro/lite-youtube";
import { LiteYTEmbed } from "@justinribeiro/lite-youtube";

export default function ArticleDetails() {
	const { isError, isLoading, article } = useArticleById();

	const CONTENT = article?.content.map(item => {
		if (item.type === "youtube")
			return (
				<div key={item.id} className={css.youtube}>
					<lite-youtube videoId={item.youtubeId}></lite-youtube>
				</div>
			);

		if (item.type === "p") return <p key={item.id}>{item.text}</p>;
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
				<address>Escrito por {article.author}</address> e inspirado por{" "}
				<Hyperlink href={article.originalArticle}>Kudasai</Hyperlink>
			</footer>
		</article>
	);
}

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
	namespace JSX {
		interface IntrinsicElements {
			["lite-youtube"]: CustomElement<LiteYTEmbed>;
		}
	}
}
