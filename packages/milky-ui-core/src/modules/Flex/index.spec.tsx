import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { Flex } from ".";

describe("Flex", () => {
  it("should render correctly", () => {
    render(<Flex>test</Flex>);

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
