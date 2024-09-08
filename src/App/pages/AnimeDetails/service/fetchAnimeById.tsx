import { EdarErr } from "../../../../err/EdarErr";
import { KITSU } from "../../../../kitsu/urls";

export const fetchAnimeById = async (signal: AbortSignal, id?: string) => {
	if (!id) throw new EdarErr({ status: 400, msg: "Required id" });

	const finalUrl = `${KITSU.animeById}/${id}?include=genres`;

	const res = await fetch(finalUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		signal
	});

	if (!res.ok) {
		throw new EdarErr({
			status: res.status,
			msg: "Error getting animes by id from kitsu api."
		});
	}

	const kitsuRes = await res.json();

	return mapKitsuRes(kitsuRes);
};

const mapKitsuRes = (data: KitsuRes) => {
	const anime = data.data;
	return {
		id: anime.id,
		title: anime.attributes.titles.en,
		status: anime.attributes.status,
		rating: anime.attributes.averageRating,
		popularity: anime.attributes.popularityRank,
		episodeCount: anime.attributes.episodeCount,
		startDate: anime.attributes.startDate,
		endDate: anime.attributes.endDate,
		synopsis: anime.attributes.synopsis,
		posterImage: anime.attributes.posterImage,
		coverImage: anime.attributes.coverImage,
		youtubeVideoId: anime.attributes.youtubeVideoId,
		showType: anime.attributes.showType,
		favoritesCount: anime.attributes.favoritesCount,
		genres: data.included.map(genre => ({
			id: genre.id,
			name: genre.attributes.name
		}))
	};
};

export type AnimeById = {
	id: string;
	title: string;
	status: "finished" | "ongoing" | "upcoming" | "current" | "tba";
	rating: string;
	popularity: number;
	episodeCount: number;
	startDate: string;
	endDate: string;
	synopsis: string;
	posterImage: {
		tiny: string;
		large: string;
		small: string;
		medium: string;
		original: string;
		meta: {
			dimensions: {
				tiny: { width: number; height: number };
				large: { width: number; height: number };
				small: { width: number; height: number };
				medium: { width: number; height: number };
			};
		};
	};
	coverImage: {
		tiny: string;
		large: string;
		small: string;
		original: string;
		meta: {
			dimensions: {
				tiny: { width: number; height: number };
				large: { width: number; height: number };
				small: { width: number; height: number };
			};
		};
	};
	youtubeVideoId?: string;
	showType: "TV" | "Movie" | "OVA" | "ONA" | "Music" | "Special";
	favoritesCount: number;
	genres: {
		id: string;
		name: string;
	}[];
};

type KitsuRes = {
	data: {
		id: string;
		type: "anime";
		attributes: {
			createdAt: string;
			updatedAt: string;
			slug: string;
			synopsis: string;
			coverImageTopOffset?: number;
			titles: {
				en?: string;
				en_jp?: string;
				ja_jp?: string;
			};
			averageRating?: string;
			ratingFrequencies: {
				[key: string]: string;
			};
			userCount: number;
			favoritesCount: number;
			startDate?: string;
			endDate?: string | null;
			nextRelease?: string | null;
			popularityRank?: number;
			ratingRank?: number;
			ageRating?: string;
			ageRatingGuide?: string;
			subtype?: string;
			status?: string;
			posterImage?: {
				tiny?: string;
				small?: string;
				medium?: string;
				large?: string;
				original?: string;
			};
			coverImage?: {
				tiny?: string;
				small?: string;
				large?: string;
				original?: string;
			};
			episodeCount?: number;
			episodeLength?: number;
			youtubeVideoId?: string;
			showType?: string;
			nsfw: boolean;
		};
	};
	included: {
		id: string;
		type: "genres";
		attributes: {
			name: string;
		};
	}[];
};
