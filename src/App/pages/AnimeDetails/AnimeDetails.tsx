import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchAnimeById } from "./service/fetchAnimeById";

export default function AnimeDetails() {
	const { id } = useParams();
	const { data } = useQuery({
		queryKey: ["anime", id],
		queryFn: ({ signal }) => fetchAnimeById(signal, id)
	});
	console.log(data);

	return <div>Aquí mostraré todos los detalles del anime con id: {id}</div>;
}
