class Kitsu {
	base = "https://kitsu.io/api/edge";
	topAnimes = `${this.base}/anime?sort=popularityRank&page[limit]=10`;
}

export const KITSU = new Kitsu();
