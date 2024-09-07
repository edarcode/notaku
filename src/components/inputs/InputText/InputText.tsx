import { forwardRef } from "react";
import css from "./css.module.css";
import Input from "./Input/Input";
import { Props } from "./types";
import { joinClass } from "./utils/joinClass";

export default forwardRef(function InputText(props: Props, ref) {
	const {
		className,
		title,
		async,
		err,
		loading,
		success,
		kind,
		...extraProps
	} = props;

	const finalClass = joinClass([className, css.label]);

	return (
		<label className={finalClass}>
			{title && <span className={css.title}>{title}</span>}

			<Input
				{...extraProps}
				ref={ref}
				async={async}
				err={err}
				loading={loading}
				success={success}
				kind={kind}
			/>

			{err && <span className={css.err}>{err}</span>}
		</label>
	);
});
