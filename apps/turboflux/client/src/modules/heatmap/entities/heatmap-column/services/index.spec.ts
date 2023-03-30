import { describe, expect, it } from "vitest";

import { createHeatmapColumn } from ".";

describe('createHeatmapColumn', () => {
  it('should have a default empty array for cells value', () => {
    const { cells } = createHeatmapColumn({ date: new Date() });

    expect(cells).toHaveLength(0);
  })
})