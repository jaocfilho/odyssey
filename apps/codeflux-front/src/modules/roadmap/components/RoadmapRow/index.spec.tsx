import { render } from "@testing-library/react";

import { beforeEach, describe, vi, it, expect } from "vitest";

import { RoadmapCell } from "../RoadmapCell";
import { RoadmapRow } from ".";
import { generateRoadmapCellArray } from "../../factories";

vi.mock("../RoadmapCell", () => ({
  RoadmapCell: vi.fn(),
}));

describe("RoadmapRow", () => {
  const cells = generateRoadmapCellArray();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should render correctly", () => {
    const { container } = render(<RoadmapRow cells={cells} />);

    expect(container).toBeInTheDocument();
  });

  it("should correctly render a RoadmapCell for each cell", () => {
    render(<RoadmapRow cells={cells} />);

    expect(RoadmapCell).toHaveBeenCalledTimes(cells.length);
  });
});
