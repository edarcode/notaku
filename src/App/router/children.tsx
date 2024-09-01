import Animes from "../pages/Animes/Animes";
import Home from "../pages/Home/Home";

export const HOME = {
	id: crypto.randomUUID(),
	path: "/",
	display: "Inicio",
	element: <Home />
};

export const ANIMES = {
	id: crypto.randomUUID(),
	path: "/animes",
	display: "Animes",
	element: <Animes />
};
