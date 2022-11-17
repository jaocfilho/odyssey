import { describe, expect } from "vitest";

import {
  generateEndingCell,
  generateProgressCell,
  generateSoloCell,
  generateStartingCell,
} from ".";

describe("roadmapCell factories", () => {
  describe("generateStartingCell", () => {
    it("should create a starting cell", () => {
      const cell = generateStartingCell();
      expect(cell.type).toBe("starting");
    });

    it("should create a cell with the given color", () => {
      const cell = generateStartingCell({ color: "purple" });
      expect(cell.color).toBe("purple");
    });
  });

  describe("generateEndingCell", () => {
    it("should create an ending cell", () => {
      const cell = generateEndingCell();
      expect(cell.type).toBe("ending");
    });

    it("should create a cell with the given color", () => {
      const cell = generateEndingCell({ color: "purple" });
      expect(cell.color).toBe("purple");
    });
  });

  describe("generateSoloCell", () => {
    it("should create a solo cell", () => {
      const cell = generateSoloCell();
      expect(cell.type).toBe("solo");
    });

    it("should create a cell with the given color", () => {
      const cell = generateSoloCell({ color: "purple" });
      expect(cell.color).toBe("purple");
    });
  });

  describe("generateProgressCell", () => {
    it("should create a progress cell", () => {
      const cell = generateProgressCell();
      expect(cell.type).toBe("progress");
    });

    it("should create a cell with the given color", () => {
      const cell = generateProgressCell({ color: "purple" });
      expect(cell.color).toBe("purple");
    });
  });
});
