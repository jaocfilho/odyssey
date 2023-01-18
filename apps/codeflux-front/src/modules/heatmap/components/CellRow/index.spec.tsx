import { render } from "@testing-library/react";

import { beforeEach, describe, vi, it, expect } from "vitest";

import { Cell } from "../Cell";
import { CellRow } from ".";
import { generateRoadmapBar } from "../../factories";

vi.mock("../Cell", () => ({
  Cell: vi.fn(),
}));

describe("CellRow", () => {
  const cells = generateRoadmapBar({ size: 5, color: "purple" });

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should render correctly", () => {
    const { container } = render(<CellRow cells={cells} />);

    expect(container).toBeInTheDocument();
  });

  it("should correctly render a Cell for each cell", () => {
    render(<CellRow cells={cells} />);

    expect(Cell).toHaveBeenCalledTimes(cells.length);
  });
});
