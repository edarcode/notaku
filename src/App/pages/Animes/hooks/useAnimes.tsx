import { useInfiniteQuery } from "@tanstack/react-query";
import { useScrollEnd } from "../../../../hooks/useScrollEnd";
import { getAnimes } from "../services/getAnimes";
import { KITSU } from "../../../../kitsu/urls";
import { useEffect } from "react";

const KITSU_ANIME = ["kitsuAnimes"] as const;

export const useAnimes = () => {
	const isScrollAtEnd = useScrollEnd(50);
	const { isLoading, isError, data, fetchNextPage } = useInfiniteQuery({
		queryKey: KITSU_ANIME,
		queryFn: ({ pageParam: url, signal }) => getAnimes(signal, url),
		initialPageParam: KITSU.animes,
		getNextPageParam: lastPage => lastPage.nextPage
	});

	useEffect(() => {
		if (isScrollAtEnd) {
			fetchNextPage();
		}
	}, [isScrollAtEnd]);

	return { isLoading, isError, data };
};
