import { describe, it, expect } from "vitest";
import { sortResources } from "./Sorting.component";
import type { Resource } from "../category/Category.component";

const mockResources: Resource[] = [
  { id: "1", category: "Podcasts", title: "Mindful Moments", tags: [], thumbnail: "", duration: 0, description: "", date_uploaded: "" },
  { id: "2", category: "Articles", title: "The Science of Sleep", tags: [], thumbnail: "", duration: 0, description: "", date_uploaded: "" },
  { id: "3", category: "Fitness", title: "10-Minute Morning Stretch", tags: [], thumbnail: "", duration: 0, description: "", date_uploaded: "" },
];

describe("when using the sortResources function", () => {
  it("returns resources in original order for 'default'", () => {
    const result = sortResources(mockResources, "default");
    expect(result.map(r => r.category)).toEqual(["Podcasts", "Articles", "Fitness"]);
  });

  it("sorts categories A to Z", () => {
    const result = sortResources(mockResources, "a-z");
    expect(result.map(r => r.category)).toEqual(["Articles", "Fitness", "Podcasts"]);
  });

  it("sorts categories Z to A", () => {
    const result = sortResources(mockResources, "z-a");
    expect(result.map(r => r.category)).toEqual(["Podcasts", "Fitness", "Articles"]);
  });

  it("does not mutate the original array", () => {
    const original = [...mockResources];
    sortResources(mockResources, "a-z");
    expect(mockResources).toEqual(original);
  });

  it("handles an empty array", () => {
    expect(sortResources([], "a-z")).toEqual([]);
  });

  it("handles a single item", () => {
    const single = [mockResources[0]];
    expect(sortResources(single, "a-z")).toEqual(single);
  });
});