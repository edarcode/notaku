import "./root.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App/router/router";

createRoot(document.querySelector("#root")!).render(
	<RouterProvider router={router} />
);
