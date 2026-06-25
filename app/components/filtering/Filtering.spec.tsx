import { describe, it, expect } from "vitest";
import { filterResources } from "./Filtering.component";
import type { Resource } from "../category/Category.component";

const mockResources: Resource[] = [
  { id: "001", category: "Podcasts", title: "Mindful Moments", thumbnail: "", tags: ["wellbeing", "mindfulness"], duration: 25, description: "", date_uploaded: "2025-07-10" },
  { id: "002", category: "Articles", title: "The Science of Sleep", thumbnail: "", tags: ["wellbeing", "sleep"], duration: 8, description: "", date_uploaded: "2025-06-22" },
  { id: "003", category: "Fitness", title: "Morning Stretch", thumbnail: "", tags: ["energy", "routine"], duration: 10, description: "", date_uploaded: "2025-08-05" },
];

describe("when using the filterResources function", () => {
  it("should return all resources when query is empty", () => {
    const result = filterResources(mockResources, "");
    expect(result).toHaveLength(3);
  });

  it("should filter by title", () => {
    const result = filterResources(mockResources, "Mindful Moments");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Mindful Moments");
  });

  it("should filter by partial title", () => {
    const result = filterResources(mockResources, "Science");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("The Science of Sleep");
  });

  it("should filter by tag", () => {
    const result = filterResources(mockResources, "mindfulness");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("001");
  });

  it("should return multiple resources when they share a matching tag", () => {
    const result = filterResources(mockResources, "wellbeing");
    expect(result).toHaveLength(2);
  });

  it("should be case insensitive when filtering by title", () => {
    const result = filterResources(mockResources, "mindful moments");
    expect(result).toHaveLength(1);
  });

  it("should be case insensitive when filtering by tag", () => {
    const result = filterResources(mockResources, "MINDFULNESS");
    expect(result).toHaveLength(1);
  });

  it("should return an empty array when no resources match", () => {
    const result = filterResources(mockResources, "xyz123");
    expect(result).toHaveLength(0);
  });
});