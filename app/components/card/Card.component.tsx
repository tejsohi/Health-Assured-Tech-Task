

type CardProps = {
  title: string;
  thumbnail: string;
  tags: string[];
};

export function Card(_props: CardProps) {
  return (
    <article className="card">
      <img src={_props.thumbnail} alt={_props.title} />
      <h2>{_props.title}</h2>
      <ul>
        {_props.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}