class Kitsu {
	base = "https://kitsu.io/api/edge";

	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;

	animes = `${this.base}/anime?page[limit]=20`;

	genres = [
		{ value: "", display: "Cualquier" },
		{ value: "action", display: "Acción" },
		{ value: "adventure", display: "Aventura" },
		{ value: "comedy", display: "Humor" },
		{ value: "drama", display: "Drama" },
		{ value: "sci-fi", display: "Ficción" },
		{ value: "space", display: "Espacial" }
	];

	animeStatus = [
		{ value: "current", display: "Current" },
		{ value: "finished", display: "Finished" },
		{ value: "tba", display: "Tba" },
		{ value: "unreleased", display: "Unreleased" },
		{ value: "upcoming", display: "upcoming" }
	];

	animeSorting = [
		{ value: "popularityRank", display: "Mejor calificado" },
		{ value: "-startDate", display: "Nuevos animes" },
		{ value: "ratingRank", display: "Mejor anime de todos" }
	];
}

export const KITSU = new Kitsu();
