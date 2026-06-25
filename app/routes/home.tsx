import mockData from "~/mocks/mock.json";
import type { Route } from "./+types/home";
import './home.css';
import { Category } from "~/components/category/Category.component";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home-container">
      <h1>Resource Center</h1>
      <span className="home-subtitle">Welcome to the resource center</span>
      <span className="home-description">Here you can find a variety of resources to help you with your health and wellness journey.</span>
      <Category resources={mockData} />
    </div>
  )
}
