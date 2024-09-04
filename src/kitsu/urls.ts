class Kitsu {
	base = "https://kitsu.io/api/edge";
	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;
	animes = `${this.base}/anime?sort=-startDate&page[limit]=16`;
}

export const KITSU = new Kitsu();
