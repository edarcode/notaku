import { useParams } from "react-router-dom";

export default function AnimeDetails() {
	const { id } = useParams();

	return <div>Aquí mostraré todos los detalles del anime con id: {id}</div>;
}
