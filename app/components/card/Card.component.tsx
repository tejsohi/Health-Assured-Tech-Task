import { Tag } from "../tag/Tag.component";
import "./Card.css";

type CardProps = {
  title: string;
  thumbnail: string;
  tags: string[];
};

export function Card(_props: CardProps) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${_props.thumbnail})` }}
      role="card"
    >
      <div className="card__content">
        <h2>{_props.title}</h2>
        <ul className="card__tags">
          {_props.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </ul>
      </div>
    </div>
  );
}