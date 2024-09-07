import { useInfiniteQuery } from "@tanstack/react-query";
import { useScrollEnd } from "../../../../hooks/useScrollEnd";
import { getAnimes } from "../services/getAnimes";
import { KITSU } from "../../../../kitsu/urls";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useAnimes = () => {
	const isScrollAtEnd = useScrollEnd(50);
	const [querys] = useSearchParams();
	const filters = Object.fromEntries(querys);
	const { isLoading, isError, data, fetchNextPage } = useInfiniteQuery({
		queryKey: ["kitsuAnimes", filters],
		queryFn: ({ pageParam: url, signal }) => getAnimes(signal, url, filters),
		initialPageParam: KITSU.animes,
		getNextPageParam: lastPage => lastPage.nextPage
	});

	useEffect(() => {
		if (isScrollAtEnd) {
			fetchNextPage();
		}
	}, [isScrollAtEnd]);

	return { isLoading, isError, kitsuAnimes: data };
};
