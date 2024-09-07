import css from "./css.module.css";
import { joinClass } from "./utils/joinClass";

export default function Spinner({ className }: { className?: string }) {
	const finalClass = joinClass([className, css.spinner]);

	return <div className={finalClass}></div>;
}
