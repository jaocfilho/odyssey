import { render } from "@testing-library/react";

import { beforeEach, describe, vi, it, expect } from "vitest";

import { Cell } from "../Cell";
import { RoadmapRow } from ".";
import { generateRoadmapBar } from "../../factories";

vi.mock("../Cell", () => ({
  Cell: vi.fn(),
}));

describe("RoadmapRow", () => {
  const cells = generateRoadmapBar({ size: 5, color: "purple" });

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should render correctly", () => {
    const { container } = render(<RoadmapRow cells={cells} />);

    expect(container).toBeInTheDocument();
  });

  it("should correctly render a RoadmapCell for each cell", () => {
    render(<RoadmapRow cells={cells} />);

    expect(Cell).toHaveBeenCalledTimes(cells.length);
  });
});
