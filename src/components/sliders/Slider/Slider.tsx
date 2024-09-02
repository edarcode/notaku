export default function Slider({ content }: Props) {
	return (
		<article>
			{content.map(item => (
				<div key={item.id}>
					<img src={item.img} alt={item.title} />
					<div>{item.title}</div>
					<div>{item.rating}</div>
				</div>
			))}
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
