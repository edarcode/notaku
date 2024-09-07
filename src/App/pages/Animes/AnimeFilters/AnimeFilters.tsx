import css from "./css.module.css";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { filterSchema } from "../filterSchema";
import InputText from "../../../../components/inputs/InputText/InputText";
import Btn from "../../../../components/buttons/Btn/Btn";
import { useSearchParams } from "react-router-dom";

export default function AnimeFilters() {
	const [params, setParams] = useSearchParams();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: zodResolver(filterSchema) });

	return (
		<form
			className={css.form}
			onSubmit={handleSubmit((data: any) => {
				const querys = new URLSearchParams(params);
				querys.set("text", data.title);
				setParams(querys);
			})}
		>
			<InputText {...register("title")} />
			<Btn disabled={Object.keys(errors).length > 0}>Filtrar</Btn>
		</form>
	);
}
