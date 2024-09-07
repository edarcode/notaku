import css from "./css.module.css";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { filterSchema } from "../filterSchema";
import InputText from "../../../../components/inputs/InputText/InputText";
import Btn from "../../../../components/buttons/Btn/Btn";

export default function AnimeFilters() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: zodResolver(filterSchema) });

	return (
		<form
			className={css.form}
			onSubmit={handleSubmit(data => console.log(data))}
		>
			<InputText {...register("title")} />
			<Btn disabled={Object.keys(errors).length > 0}>Filtrar</Btn>
		</form>
	);
}
