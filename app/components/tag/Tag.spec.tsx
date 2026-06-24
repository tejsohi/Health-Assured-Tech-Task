import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Tag } from "./Tag.component";

describe("When rendering the Tag component", () => {

    it("should render the tag text", () => {
        const tagText = "Health";
        render(<Tag text={tagText} />);
        expect(screen.getByText(tagText)).toBeTruthy();
    });
});