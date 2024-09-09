import { useQuery } from "@tanstack/react-query";
import { fetchArticleById } from "../services/fetchArticleById";
import { useParams } from "react-router-dom";

export const useArticleById = () => {
	const { id } = useParams();
	const { isError, isLoading, data } = useQuery({
		queryKey: ["article"],
		queryFn: () => fetchArticleById(id)
	});

	return { isError, isLoading, article: data };
};
