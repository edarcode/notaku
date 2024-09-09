import { ARTICLE } from "../../../../database/article";
import { EdarErr } from "../../../../err/EdarErr";

export const fetchArticleById = async (id?: string) => {
	if (!id) throw new EdarErr({ status: 400, msg: "Required id" });
	const article = ARTICLE.find(article => article.id === id);
	return article;
};
