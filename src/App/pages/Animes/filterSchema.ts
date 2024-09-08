import { z } from "zod";

export const filterSchema = z
	.object({
		text: z.string(),
		genre: z.enum([
			"",
			"action",
			"adventure",
			"comedy",
			"drama",
			"sci-fi",
			"space"
		])
	})
	.partial()
	.strict();
