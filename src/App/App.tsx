import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<header>
				<h1>Notaku</h1>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>✏️ edarcode</footer>
		</>
	);
}

export default App;
