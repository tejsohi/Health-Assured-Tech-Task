import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Modal } from "./Modal.component";

const mockModal = {
  title: "Test Modal Title",
  thumbnail: "https://example.com/image.jpg",
  tags: ["Health", "Wellbeing", "Fitness"],
  duration: 10,
  dateUploaded: new Date("2023-01-01"),
  description: "A test description for the modal.",
  category: "Podcasts",
  onClose: vi.fn(),
};

describe("When rendering the Modal component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Modal {...mockModal} />);
  });

  it("should render the title", () => {
    expect(screen.getByText(mockModal.title)).toBeTruthy();
  });

  it("should render the category", () => {
    expect(screen.getByText(mockModal.category)).toBeTruthy();
  });

  it("should render the description", () => {
    expect(screen.getByText(mockModal.description)).toBeTruthy();
  });

  it("should render all tags", () => {
    mockModal.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeTruthy();
    });
  });

  it("should render the duration", () => {
    expect(screen.getByText(`${mockModal.duration} min`)).toBeTruthy();
  });

  it("should render the formatted date", () => {
    expect(screen.getByText("01/01/2023")).toBeTruthy();
  });

  it("should render the thumbnail", () => {
    const image = document.querySelector(".modal__image") as HTMLElement;
    expect(image.style.backgroundImage).toBe(`url("${mockModal.thumbnail}")`);
  });

  it("should call onClose when the close button is clicked", () => {
    fireEvent.click(screen.getByLabelText("Close"));
    expect(mockModal.onClose).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when the backdrop is clicked", () => {
    fireEvent.click(document.querySelector(".modal__backdrop") as HTMLElement);
    expect(mockModal.onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose when clicking inside the modal content", () => {
    fireEvent.click(document.querySelector(".modal__content") as HTMLElement);
    expect(mockModal.onClose).not.toHaveBeenCalled();
  });
});