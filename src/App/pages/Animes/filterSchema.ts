import { z } from "zod";
import { KITSU } from "../../../kitsu/urls";

const genres = KITSU.genres.map(genre => genre.value);
const animeSorting = KITSU.animeSorting.map(item => item.value);
const animeStatus = KITSU.animeStatus.map(item => item.value);

export const filterSchema = z
	.object({
		text: z.string(),
		genre: z.custom<string>(genre => genres.includes(genre)),
		sorting: z.custom<string>(item => animeSorting.includes(item)),
		status: z.custom<string>(item => animeStatus.includes(item))
	})
	.partial()
	.strict();
