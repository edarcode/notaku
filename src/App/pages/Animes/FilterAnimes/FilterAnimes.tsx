import css from "./css.module.css";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { filterSchema } from "../filterSchema";
import InputText from "../../../../components/inputs/InputText/InputText";
import Btn from "../../../../components/buttons/Btn/Btn";
import Select from "../../../../components/inputs/Select/Select";
import { KITSU } from "../../../../kitsu/urls";
import { FilterAnimes as Filters } from "../hooks/useAnimes";

export default function FilterAnimes({ filterAnimes, isLoading }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: zodResolver(filterSchema) });

	return (
		<form
			className={css.form}
			onSubmit={handleSubmit(filters => filterAnimes(filters))}
		>
			<InputText {...register("text")} placeholder="🔎 Anime" />
			<Select opt={KITSU.genres} {...register("genre")} />
			<Select
				className={css.sorting}
				opt={KITSU.animeSorting}
				{...register("sorting")}
			/>
			<Btn disabled={Object.keys(errors).length > 0} loading={isLoading}>
				Filtrar
			</Btn>
		</form>
	);
}

type Props = { filterAnimes: Filters; isLoading: boolean };
