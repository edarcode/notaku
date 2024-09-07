class Kitsu {
	base = "https://kitsu.io/api/edge";
	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;
	animes = `${this.base}/anime?page[limit]=20`;
	genres = {
		action: "action",
		adventure: "adventure",
		comedy: "comedy",
		drama: "drama",
		"sci-fi": "sci-fi",
		space: "space"
	} as const;
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
