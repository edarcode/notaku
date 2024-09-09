import "@justinribeiro/lite-youtube";
import { LiteYTEmbed } from "@justinribeiro/lite-youtube";

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type SvgProps = React.SVGProps<SVGSVGElement>;
export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
	namespace JSX {
		interface IntrinsicElements {
			["lite-youtube"]: CustomElement<LiteYTEmbed>;
		}
	}
}
