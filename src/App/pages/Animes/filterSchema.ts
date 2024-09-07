import { z } from "zod";

export const filterSchema = z.object({
	title: z.string().min(4, { message: "Mín 4 dígitos" })
});
