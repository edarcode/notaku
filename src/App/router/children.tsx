import AnimeDetails from "../pages/AnimeDetails/AnimeDetails";
import Animes from "../pages/Animes/Animes";
import ArticleDetails from "../pages/ArticleDetails/ArticleDetails";
import Home from "../pages/Home/Home";

export const HOME = {
	id: crypto.randomUUID(),
	path: "",
	to: "/",
	display: "Inicio",
	element: <Home />
};

export const ANIMES = {
	id: crypto.randomUUID(),
	path: "animes",
	to: "/animes",
	display: "Animes",
	element: <Animes />
};

export const ANIME_DETAILS = {
	id: crypto.randomUUID(),
	path: "anime/:id",
	to: "/anime/",
	display: "",
	element: <AnimeDetails />
};

export const ARTICLE_DETAILS = {
	id: crypto.randomUUID(),
	path: "article/:id",
	to: "/article/",
	display: "",
	element: <ArticleDetails />
};
