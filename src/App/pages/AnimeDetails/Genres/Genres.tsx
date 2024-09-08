import css from "./css.module.css";

export default function Genres({ genres }: Props) {
	if (!genres) return <span className={css.genre}>Sin género</span>;
	return (
		<div className={css.genres}>
			{genres.map(genre => (
				<span className={css.genre} key={genre.id}>
					{genre.name}
				</span>
			))}
		</div>
	);
}

type Props = {
	genres?: { id: string; name: string }[];
};
