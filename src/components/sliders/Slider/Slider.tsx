import { useEffect, useState } from "react";
import IconBtn from "../../buttons/IconBtn/IconBtn";
import css from "./css.module.css";
import { motion, Variants } from "framer-motion";

export default function Slider({ content }: Props) {
	const [index, setIndex] = useState(0);
	const item = content[index];

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextItem();
		}, 4000);

		return () => clearInterval(intervalId);
	}, []);

	const backItem = () => {
		setIndex(index => {
			if (index == 0) return content.length - 1;
			return index - 1;
		});
	};

	const nextItem = () => {
		setIndex(index => {
			if (index == content.length - 1) return 0;
			return index + 1;
		});
	};

	return (
		<article className={css.slider}>
			<motion.img
				key={item.id}
				className={css.img}
				src={item.img}
				alt={item.title}
				variants={variants}
				initial="hidden"
				animate="visible"
			/>
			<div className={css.rating}>{Number(item.rating).toFixed()}/100</div>
			<div className={css.title}>{item.title}</div>
			<IconBtn className={css.back} onClick={backItem} />
			<IconBtn className={css.next} onClick={nextItem} />
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

const variants: Variants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: { duration: 1.5 }
	}
};
