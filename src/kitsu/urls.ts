class Kitsu {
	base = "https://kitsu.io/api/edge";

	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;

	animes = `${this.base}/anime?page[limit]=20`;

	genres = [
		{ value: "", display: "Cualquiera" },
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
		{ value: "", display: "Defecto" },
		{ value: "-averageRating", display: "⭐ Calificación" },
		{ value: "popularityRank", display: "👀 Popularidad" },
		{ value: "-startDate", display: "🗓️ Recientes" }
	];
}

export const KITSU = new Kitsu();
