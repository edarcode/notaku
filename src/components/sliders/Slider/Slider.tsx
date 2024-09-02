import { useState } from "react";
import IconBtn from "../../buttons/IconBtn/IconBtn";
import css from "./css.module.css";

export default function Slider({ content }: Props) {
	const [index, setIndex] = useState(0);
	const item = content[index];

	const nextItem = () => {
		let newIndex = index + 1;
		if (newIndex >= content.length) newIndex = 0;
		setIndex(newIndex);
	};

	const backItem = () => {
		let newIndex = index - 1;
		if (newIndex < 0) newIndex = content.length - 1;
		setIndex(newIndex);
	};

	return (
		<article className={css.slider}>
			<img className={css.img} src={item.img} alt={item.title} />
			<div className={css.rating}>{Number(item.rating).toFixed()}/100</div>
			<div className={css.title}>{item.title}</div>
			<IconBtn className={css.back} onClick={nextItem} />
			<IconBtn className={css.next} onClick={backItem} />
		</article>
	);
}

type Props = {
	content: Item[];
};

type Item = {
	id: string;
	title: string;
	rating: string;
	img: string;
};
