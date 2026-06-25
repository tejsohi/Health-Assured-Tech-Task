import type { Resource } from "../category/Category.component";
import { Card } from "../card/Card.component";

type CardsProps = {
  cards: Resource[];
};

export function Cards({ cards }: CardsProps) {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}