import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Category, groupByCategory } from "./Category.component";
import type { Resource } from "./Category.component";

const mockResources: Resource[] = [
  { id: "001", category: "Podcasts", title: "Mindful Moments", thumbnail: "", tags: [], duration: 25, description: "", date_uploaded: "2025-07-10" },
  { id: "002", category: "Articles", title: "The Science of Sleep", thumbnail: "", tags: [], duration: 8, description: "", date_uploaded: "2025-06-22" },
  { id: "003", category: "Podcasts", title: "Another Podcast", thumbnail: "", tags: [], duration: 15, description: "", date_uploaded: "2025-07-12" },
];

describe("when making use of the groupByCategory function", () => {
  it("should group resources by their category", () => {
    const result = groupByCategory(mockResources);
    expect(Object.keys(result)).toEqual(["Podcasts", "Articles"]);
  });

  it("should place multiple resources under the same category", () => {
    const result = groupByCategory(mockResources);
    expect(result["Podcasts"]).toHaveLength(2);
  });

  it("should place a single resource under its category", () => {
    const result = groupByCategory(mockResources);
    expect(result["Articles"]).toHaveLength(1);
  });

  it("should return an empty object when given an empty array", () => {
    const result = groupByCategory([]);
    expect(result).toEqual({});
  });
});

describe("when rendering the Category component", () => {
  it("should render a heading for each category", () => {
    render(<Category resources={mockResources} />);
    expect(screen.getByText("Podcasts")).toBeTruthy();
    expect(screen.getByText("Articles")).toBeTruthy();
  });

  it("should render each resource title", () => {
    render(<Category resources={mockResources} />);
    expect(screen.getByText("Mindful Moments")).toBeTruthy();
    expect(screen.getByText("The Science of Sleep")).toBeTruthy();
  });

  it("should render no sections when given an empty array", () => {
    render(<Category resources={[]} />);
    const sections = document.querySelectorAll(".resource-catalogue__category");
    expect(sections.length).toBe(0);
  });
});