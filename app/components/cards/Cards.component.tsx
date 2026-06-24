import { Card } from "../card/Card.component";
import "./cards.css";

type CardItem = {
  title: string;
  thumbnail: string;
  tags: string[];
};

type CardsProps = {
  cards: CardItem[];
};

export function Cards({ cards }: CardsProps) {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
