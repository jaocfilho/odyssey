import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { Container } from ".";

describe("Container", () => {
  it("shoudl render correctly", () => {
    render(<Container>test</Container>);

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
