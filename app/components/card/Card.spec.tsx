import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card.component";

const mockCard = {
  title: "Test Card Title",
  thumbnail: "https://example.com/image.jpg",
  tags: ["Health", "Wellbeing", "Fitness"],
  duration: 10,
  dateUploaded: new Date("2023-01-01"),
  description: "This is a test description for the card component.",
  category: "Health",
};

describe("When rendering the card component", () => {
  it("should render the card title", () => {
    render(<Card {...mockCard} />);
    expect(screen.getByText(mockCard.title)).toBeTruthy();
  });

  it("should render a thumbnail image", () => {
    render(<Card {...mockCard} />);
    const card = screen.getByRole("button");
    expect(card.style.backgroundImage).toBe(`url("${mockCard.thumbnail}")`);
  });

  it("should render the card tags", () => {
    render(<Card {...mockCard} />);
    mockCard.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeTruthy();
    });
  });

  it("should render no more than 3 tags", () => {
    const manyTags = ["Health", "Wellbeing", "Fitness", "Mental Health", "Support"];
    render(<Card title={mockCard.title} thumbnail={mockCard.thumbnail} tags={manyTags} duration={mockCard.duration} dateUploaded={mockCard.dateUploaded} description={mockCard.description} category={mockCard.category} />);
    const tagElements = document.querySelectorAll(".tag");
    expect(tagElements.length).toBeLessThanOrEqual(3);
  });

  it("should render a read/watch time in minutes", () => {
    render(<Card {...mockCard} duration={mockCard.duration} />);
    expect(screen.getByText(`${mockCard.duration} min`)).toBeTruthy();
  });

  it("should render the date uploaded", () => {
    render(<Card {...mockCard} dateUploaded={mockCard.dateUploaded} />);
    expect(screen.getByText(mockCard.dateUploaded.toLocaleDateString())).toBeTruthy();
  });
});
