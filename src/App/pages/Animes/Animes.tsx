import { useForm } from "react-hook-form";
import InputText from "../../../components/inputs/InputText/InputText";
import WrapperAnimes from "./WrapperAnimes/WrapperAnimes";
import css from "./css.module.css";
import Btn from "../../../components/buttons/Btn/Btn";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { filterSchema } from "./filterSchema";

export default function Animes() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: zodResolver(filterSchema) });

	return (
		<section className={css.animes}>
			<form
				className={css.form}
				onSubmit={handleSubmit(data => console.log(data))}
			>
				<InputText {...register("title")} />
				<Btn disabled={Object.keys(errors).length > 0}>Filtrar</Btn>
			</form>
			<WrapperAnimes />
		</section>
	);
}
