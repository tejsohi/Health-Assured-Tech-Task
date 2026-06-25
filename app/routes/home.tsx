import { useState } from "react";
import mockData from "~/mocks/mock.json";
import type { Route } from "./+types/home";
import './home.css';
import { Category } from "~/components/category/Category.component";
import { SearchBox, filterResources } from "~/components/filtering/Filtering.component";
import { SortDropdown, sortResources } from "~/components/sorting/Sorting.component";
import type { SortOrder } from "~/components/sorting/Sorting.component";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const filtered = filterResources(mockData, query);
  const sorted = sortResources(filtered, sortOrder);

  return (
    <div className="home-container">
      <h1>Resource Center</h1>
      <span className="home-subtitle">Welcome to the resource center</span>
      <span className="home-description">Here you can find a variety of resources to help you with your health and wellness journey.</span>
      <div className="filtering-controls">
        <SearchBox value={query} onChange={setQuery} />
        <SortDropdown value={sortOrder} onChange={setSortOrder} />
      </div>
      <Category resources={sorted} />
    </div>
  );
}