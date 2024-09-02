import IconBtn from "../../buttons/IconBtn/IconBtn";
import css from "./css.module.css";

export default function Slider({ content }: Props) {
	return (
		<article className={css.slider}>
			<section className={css.content}>
				{content.map(item => (
					<div key={item.id} className={css.item}>
						<img src={item.img} alt={item.title} />
						<div>{item.title}</div>
						<div>{item.rating}</div>
					</div>
				))}
			</section>

			<IconBtn className={css.back} />
			<IconBtn className={css.next} />
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
