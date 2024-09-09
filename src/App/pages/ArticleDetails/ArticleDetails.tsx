import { useParams } from "react-router-dom";

export default function ArticleDetails() {
	const { id } = useParams();
	return <div>Aquí pintaré el articulo completo con id: {id}</div>;
}
