import { z } from "zod";

export const filterSchema = z
	.object({
		text: z.string().min(4, { message: "Mín 4 dígitos" }).optional()
	})
	.strict();
