import { z } from "zod";
import { KITSU } from "../../../kitsu/urls";

const genres = KITSU.genres.map(genre => genre.value);

export const filterSchema = z
	.object({
		text: z.string(),
		genre: z.custom<string>(genre => genres.includes(genre))
	})
	.partial()
	.strict();
