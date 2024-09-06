import { EdarErr } from "../../../../err/EdarErr";
import { KITSU } from "../../../../kitsu/urls";

type Filters = {
	genres?: string;
	text?: string;
	year?: number;
	status?: keyof typeof KITSU.animeStatus;
	sorting?: keyof typeof KITSU.animeSorting;
};

export const getAnimes = async (
	signal: AbortSignal,
	url?: string,
	filters?: Filters
) => {
	const finalUrl = addFilters(url ? url : KITSU.animes, filters);

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
			msg: "Error getting animes from kitsu api."
		});
	}

	const kitsuRes: KitsuAnimeResponse = await res.json();
	const kitsuMappedRes = mapKitsuRes(kitsuRes);

	return kitsuMappedRes;
};

const addFilters = (url: string, filters?: Filters) => {
	if (!filters) return url;
	let newUrl = url;
	const { text, genres, year, status, sorting } = filters;

	if (text) newUrl = newUrl.concat(`&filter[text]=${text}`);
	if (genres) newUrl = newUrl.concat(`&filter[genres]=${genres}`);
	if (status) newUrl = newUrl.concat(`&filter[status]=${status}`);
	if (year) newUrl = newUrl.concat(`&filter[year]=${year}`);
	if (sorting) newUrl = newUrl.concat(`&sort=${sorting}`);

	return newUrl;
};

const mapKitsuRes = (kitsuRes: KitsuAnimeResponse) => {
	const result = {
		animes: kitsuRes.data.map(anime => ({
			id: anime.id,
			title: anime.attributes.canonicalTitle,
			synopsis: anime.attributes.synopsis,
			rating: anime.attributes.averageRating,
			startDate: anime.attributes.startDate,
			status: anime.attributes.status,
			posterImage: anime.attributes.posterImage,
			coverImage: anime.attributes.coverImage,
			episodeCount: anime.attributes.episodeCount,
			youtubeVideoId: anime.attributes.youtubeVideoId
		})),
		prevPage: kitsuRes.links.prev,
		nextPage: kitsuRes.links.next
	};

	return result;
};

type KitsuAnimeResponse = {
	data: Anime[];
	meta: Meta;
	links: Links;
};

type Anime = {
	id: string;
	type: string;
	links: Links;
	attributes: AnimeAttributes;
	relationships?: Relationships;
};

type Links = {
	first: string;
	prev: string;
	next: string;
	last: string;
};

type AnimeAttributes = {
	createdAt: string;
	updatedAt: string;
	slug: string;
	synopsis: string;
	description: string;
	coverImageTopOffset: number;
	titles: Titles;
	canonicalTitle: string;
	abbreviatedTitles: string[];
	averageRating: string;
	ratingFrequencies: Record<string, string>;
	userCount: number;
	favoritesCount: number;
	startDate: string;
	endDate?: string;
	nextRelease?: string;
	popularityRank: number;
	ratingRank: number;
	ageRating: string;
	ageRatingGuide: string;
	subtype: string;
	status: string;
	tba?: string;
	posterImage: Image;
	coverImage: Image;
	episodeCount?: number;
	episodeLength?: number;
	totalLength?: number;
	youtubeVideoId?: string;
	showType: string;
	nsfw: boolean;
};

type Titles = {
	en: string;
	en_jp: string;
	ja_jp: string;
};

type Image = {
	tiny: string;
	small: string;
	medium: string;
	large: string;
	original: string;
	meta: {
		dimensions: {
			tiny: Dimensions;
			small: Dimensions;
			medium: Dimensions;
			large: Dimensions;
		};
	};
};

type Dimensions = {
	width: number;
	height: number;
};

type Relationships = {
	genres: RelatedLinks;
	categories: RelatedLinks;
	castings: RelatedLinks;
	installments: RelatedLinks;
	mappings: RelatedLinks;
	reviews: RelatedLinks;
	mediaRelationships: RelatedLinks;
	characters: RelatedLinks;
	staff: RelatedLinks;
	productions: RelatedLinks;
	quotes: RelatedLinks;
	episodes: RelatedLinks;
	streamingLinks: RelatedLinks;
	animeProductions: RelatedLinks;
	animeCharacters: RelatedLinks;
	animeStaff: RelatedLinks;
};

type RelatedLinks = {
	links: {
		self: string;
		related: string;
	};
};

type Meta = {
	count: number;
};
