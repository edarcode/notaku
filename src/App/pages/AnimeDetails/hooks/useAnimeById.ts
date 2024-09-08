import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchAnimeById } from "../service/fetchAnimeById";

export const useAnimeById = () => {
	const { id } = useParams();
	const { data, isError, isLoading } = useQuery({
		queryKey: ["anime", id],
		queryFn: ({ signal }) => fetchAnimeById(signal, id)
	});

	return { anime: data, isLoading, isError };
};
