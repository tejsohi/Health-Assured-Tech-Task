import type { Resource } from "../category/Category.component";
import { Card } from "../card/Card.component";

type CardsProps = {
  cards: Resource[];
};

export function Cards({ cards }: CardsProps) {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.id}
          title={card.title}
          thumbnail={card.thumbnail}
          tags={card.tags}
          duration={card.duration}
          dateUploaded={new Date(card.date_uploaded)} />
      ))}
    </div>
  );
}