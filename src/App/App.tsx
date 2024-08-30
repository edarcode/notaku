import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<header>📌</header>
			<main>
				<Outlet />
			</main>
			<footer>✏️ edarcode</footer>
		</>
	);
}

export default App;
