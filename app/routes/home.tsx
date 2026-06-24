import { Cards } from "~/components/cards/Cards.component";
import mockData from "~/mocks/mock.json";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Cards cards={mockData} />;
}
