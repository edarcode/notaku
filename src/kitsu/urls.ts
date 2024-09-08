class Kitsu {
	base = "https://kitsu.io/api/edge";

	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;

	animes = `${this.base}/anime?page[limit]=20`;

	animeById = `${this.base}/anime`;

	genres = [
		{ value: "", display: "Género" },
		{ value: "action", display: "Acción" },
		{ value: "adventure", display: "Aventura" },
		{ value: "comedy", display: "Humor" },
		{ value: "drama", display: "Drama" },
		{ value: "sci-fi", display: "Ficción" },
		{ value: "space", display: "Espacial" },
		{ value: "sports", display: "Deporte" },
		{ value: "mystery", display: "Misterio" },
		{ value: "psychological", display: "Psicológico" },
		{ value: "horror", display: "Horror" },
		{ value: "thriller", display: "Thriller" },
		{ value: "romance", display: "Romance" },
		{ value: "ecchi", display: "Ecchi" },
		{ value: "demons", display: "Demons" },
		{ value: "harem", display: "Harem" },
		{ value: "school", display: "School" }
	];

	animeStatus = [
		{ value: "", display: "Estado" },
		{ value: "current", display: "Emisión" },
		{ value: "finished", display: "Finalizado" },
		{ value: "tba", display: "Indeterminado" },
		{ value: "unreleased", display: "No pulicado" },
		{ value: "upcoming", display: "Próximo" }
	];

	animeSorting = [
		{ value: "", display: "🎬 Defecto" },
		{ value: "-averageRating", display: "⭐ Calificación" },
		{ value: "popularityRank", display: "👀 Popularidad" },
		{ value: "-startDate", display: "🗓️ Recientes" }
	];
}

export const KITSU = new Kitsu();
