import { describe, expect, it } from "vitest";

import { generateRoadmapBar } from ".";

describe("generateRoadmapBar", () => {
  it("should create a roadmap bar", () => {
    const cells = generateRoadmapBar({ size: 5, color: "purple" });

    const [starting] = cells.splice(0, 1);
    const [ending] = cells.splice(-1, 1);

    expect(starting.type).toBe("starting");
    expect(ending.type).toBe("ending");

    cells.forEach((cell) => {
      expect(cell.type).toBe("progress");
    });
  });

  it("should pass the same color to every cell", () => {
    const cells = generateRoadmapBar({ size: 5, color: "purple" });

    cells.forEach((cell) => {
      expect(cell.color).toBe("purple");
    });
  });

  it("should throw error if size is smaller than 2", () => {
    expect(() =>
      generateRoadmapBar({ size: 1, color: "purple" })
    ).toThrowError();
  });
});
