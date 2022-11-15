import { render } from "@testing-library/react";

import { describe, vi, it, expect } from "vitest";

import { RoadmapCell } from "../RoadmapCell";
import { RoadmapRow } from ".";

vi.mock("../RoadmapCell", () => ({
  RoadmapCell: vi.fn(() => null),
}));

describe("RoadmapRow", () => {
  it("should render correctly", () => {
    const { container } = render(<RoadmapRow cells={[]} />);

    expect(container).toBeInTheDocument();
  });
});
