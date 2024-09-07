import { useInfiniteQuery } from "@tanstack/react-query";
import { useScrollEnd } from "../../../../hooks/useScrollEnd";
import { getAnimes, Image } from "../services/getAnimes";
import { KITSU } from "../../../../kitsu/urls";
import { useEffect, useState } from "react";
import { filterSchema } from "../filterSchema";
import { z } from "zod";

export const useAnimes = () => {
	const isScrollAtEnd = useScrollEnd(50);
	const [filters, setFilters] = useState<Filters>();

	const { isLoading, isError, data, fetchNextPage } = useInfiniteQuery({
		queryKey: ["kitsuAnimePages", filters],
		queryFn: ({ pageParam: url, signal }) => getAnimes(signal, url, filters),
		initialPageParam: KITSU.animes,
		getNextPageParam: lastPage => lastPage.nextPage
	});

	useEffect(() => {
		if (isScrollAtEnd) {
			fetchNextPage();
		}
	}, [isScrollAtEnd]);

	const filterAnimes = (filters: Filters) => setFilters(filters);

	return {
		isLoading,
		isError,
		kitsuAnimePages: data && data.pages,
		filterAnimes
	};
};

export type KitsuAnimePages = AnimePages | undefined;

export type FilterAnimes = (filters: Filters) => void;

type Filters = z.infer<typeof filterSchema>;

type AnimePages = { animes: Animes; prevPage: string; nextPage: string }[];

type Animes = Anime[];

type Anime = {
	id: string;
	title: string;
	synopsis: string;
	rating: string;
	startDate: string;
	status: string;
	posterImage: Image;
	coverImage: Image;
	episodeCount: number | undefined;
	youtubeVideoId: string | undefined;
};
