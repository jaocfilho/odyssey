import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { Box } from ".";

describe("Box", () => {
  it("should render correctly", () => {
    render(<Box>test</Box>);

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
