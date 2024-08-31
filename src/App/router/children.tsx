import Anime from "../pages/Anime/Anime";
import Home from "../pages/Home/Home";

export const HOME = {
	id: crypto.randomUUID(),
	path: "/",
	display: "Inicio",
	element: <Home />
};

export const ANIME = {
	id: crypto.randomUUID(),
	path: "/anime",
	display: "Anime",
	element: <Anime />
};
