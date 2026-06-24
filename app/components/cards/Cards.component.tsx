
import { Card } from "../card/Card.component";

type CardItem = {
  title: string;
  thumbnail: string;
  tags: string[];
};

type CardsProps = {
  cards: CardItem[];
};

export function Cards({ cards }: CardsProps) {
  return null;
}
