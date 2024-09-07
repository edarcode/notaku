import { useInfiniteQuery } from "@tanstack/react-query";
import { useScrollEnd } from "../../../../hooks/useScrollEnd";
import { getAnimes } from "../services/getAnimes";
import { KITSU } from "../../../../kitsu/urls";
import { useEffect, useState } from "react";

type Filters = { title?: string } | undefined;

export const useAnimes = () => {
	const isScrollAtEnd = useScrollEnd(50);
	const [filters, setFilters] = useState<Filters>();
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

	const filterAnimes = (filters: Filters) => {
		setFilters(filters);
	};

	return { isLoading, isError, kitsuAnimes: data, filterAnimes };
};
