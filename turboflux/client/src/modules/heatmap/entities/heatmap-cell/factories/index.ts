import { faker } from '@faker-js/faker';

import { cellColors, cellTypes, HeatmapCell } from '..';

type CreateRandomHeatmapCellOptions = Partial<HeatmapCell>;

export function createRandomHeatmapCell(
  options?: CreateRandomHeatmapCellOptions
): HeatmapCell {
  return {
    color: options?.color || faker.helpers.arrayElement(cellColors),
    type: options?.type || faker.helpers.arrayElement(cellTypes),
  };
}
