import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Cards } from "./Cards.component";

vi.mock("../card/Card.component", () => ({
  Card: ({ title }: { title: string }) => <article data-testid="card">{title}</article>,
}));

const mockCards = [
  {
    title: "Managing Stress at Work",
    thumbnail: "https://example.com/image1.jpg",
    tags: ["Stress", "Wellbeing"],
  },
  {
    title: "Healthy Eating Habits",
    thumbnail: "https://example.com/image2.jpg",
    tags: ["Nutrition", "Health", "Lifestyle"],
  },
  {
    title: "Mindfulness Techniques",
    thumbnail: "https://example.com/image3.jpg",
    tags: ["Mindfulness", "Mental Health"],
  },
];

describe("When rendering the Cards component", () => {
  it("should render a Card for each item in the list", () => {
    render(<Cards cards={mockCards} />);
    expect(screen.getAllByTestId("card").length).toBe(mockCards.length);
  });

  it("should render no cards when given an empty array", () => {
    render(<Cards cards={[]} />);
    expect(screen.queryAllByTestId("card").length).toBe(0);
  });

  it("should render a single card when given one item", () => {
    render(<Cards cards={[mockCards[0]]} />);
    expect(screen.getAllByTestId("card").length).toBe(1);
  });
});
