import { joinClass } from "../../../utils/joinClass";
import { NETWORKS } from "./consts";

import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Networks({ className }: Props) {
	const finalClassName = joinClass([css.networks, className]);
	const networks = NETWORKS.map(network => (
		<a
			key={network.name}
			target="_blank"
			rel="noopener noreferrer"
			href={network.url}
		>
			<img src={network.icon} alt={network.name} />
		</a>
	));

	return <nav className={finalClassName}>{networks}</nav>;
}
