class Kitsu {
	base = "https://kitsu.io/api/edge";
	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;
	animes = `${this.base}/anime?page[limit]=20`;
	animeStatus = {
		current: "current",
		finished: "finished",
		tba: "tba",
		unreleased: "unreleased",
		upcoming: "upcoming"
	} as const;
	animeSorting = {
		"": "",
		popularityRank: "popularityRank", // el mejor calificado
		"-startDate": "-startDate", // nuevos animes
		ratingRank: "ratingRank" // el mejor de todos
	} as const;
}

export const KITSU = new Kitsu();
