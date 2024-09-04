import { useQuery } from "@tanstack/react-query";
import { getAnimes } from "./services/getAnimes";

export default function Animes() {
	const { data: allAnimes } = useQuery({
		queryKey: ["allAnimes"],
		queryFn: () => getAnimes()
	});
	console.log(allAnimes);
	return <div>Aún estamos trabajando en esta vista</div>;
}
