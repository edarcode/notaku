import { EdarErr } from "../err/EdarErr";

export const formatDate = (date?: string | null | undefined) => {
	if (!date) throw new EdarErr({ status: 400, msg: "Required date" });
	const format = {
		day: "numeric",
		month: "long",
		year: "numeric"
	} as const;

	return new Date(date).toLocaleString("es-ES", format);
};
