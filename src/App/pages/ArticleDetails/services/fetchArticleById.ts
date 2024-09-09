import { ARTICLE } from "../../../../database/article";

export const fetchArticleById = async (id: string) => {
	const article = ARTICLE.find(article => article.id === id);
	return article;
};
