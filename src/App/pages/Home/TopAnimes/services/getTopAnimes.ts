import { KITSU } from "../../../../../kitsu/urls";
import { EdarErr } from "../../../../../err/EdarErr";

export const getTopAnimes = async () => {
	const res = await fetch(KITSU.topAnimes, {
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
	const topAnimes: Anime[] = kitsuAnimes.map((anime: any) => ({
		id: anime.id,
		title: anime.attributes.canonicalTitle,
		synopsis: anime.attributes.synopsis,
		rating: anime.attributes.averageRating,
		posterImages: anime.attributes.posterImage,
		coverImages: anime.attributes.coverImage
	}));

	// const result: Anime[] = [];
	// for (let i = 0; i < topAnimes.length; i++) {
	// 	const element = topAnimes[i];
	// 	if (result.some(anime => element.title.includes(anime.title))) continue;
	// 	result.push(element);
	// }

	return topAnimes;
};

type Anime = {
	id: string;
	title: string;
	synopsis: string;
	rating: string;
	posterImages: {
		tiny: string;
		large: string;
		small: string;
		medium: string;
		original: string;
		meta: {
			dimensions: {
				tiny: {
					width: number;
					height: number;
				};
				large: {
					width: number;
					height: number;
				};
				small: {
					width: number;
					height: number;
				};
				medium: {
					width: number;
					height: number;
				};
			};
		};
	};
	coverImages: {
		tiny: string;
		large: string;
		small: string;
		original: string;
		meta: {
			dimensions: {
				tiny: {
					width: number;
					height: number;
				};
				large: {
					width: number;
					height: number;
				};
				small: {
					width: number;
					height: number;
				};
			};
		};
	};
};
