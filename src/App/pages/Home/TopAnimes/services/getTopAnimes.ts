import { KITSU } from "../../../../../kitsu/urls";
import { EdarErr } from "../../../../../err/EdarErr";

export const getTopAnimes = async (signal: AbortSignal) => {
	const res = await fetch(KITSU.topAnimes, {
		signal,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (!res.ok) {
		throw new EdarErr({
			status: res.status,
			msg: "Error getting top 5 anime from kitsu api."
		});
	}

	const kitsuRes = await res.json();
	const topAnimes = mapKitsuRes(kitsuRes);

	return topAnimes;
};

const mapKitsuRes = (kitsuRes: any) => {
	const kitsuAnimes = kitsuRes.data;
	const topAnimes = kitsuAnimes.map((anime: any) => ({
		id: anime.id,
		title: anime.attributes.canonicalTitle,
		synopsis: anime.attributes.synopsis,
		rating: anime.attributes.averageRating,
		posterImages: anime.attributes.posterImage,
		coverImages: anime.attributes.coverImage
	}));

	return topAnimes;
};
