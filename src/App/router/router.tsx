import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import ErrPage from "../pages/NotFound404/ErrPage.js";
import { ANIMES, HOME } from "./children.js";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrPage />,
		children: [HOME, ANIMES]
	}
]);
