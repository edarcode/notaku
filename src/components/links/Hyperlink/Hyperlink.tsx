import { joinClass } from "../../../utils/joinClass";
import css from "./css.module.css";

type Props = {
	className?: string;
	href: string;
	children: string;
	target?: string;
	rel?: string;
};

export default function Hyperlink({
	className,
	href,
	children,
	target = "_blank",
	rel = "noopener noreferrer",
	...props
}: Props) {
	const finalClass = joinClass([className, css.link]);

	return (
		<a {...props} href={href} className={finalClass} target={target} rel={rel}>
			{children}
		</a>
	);
}
