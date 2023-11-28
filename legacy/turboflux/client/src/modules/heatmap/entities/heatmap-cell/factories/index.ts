import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import { cellColors, cellTypes, HeatmapCell, HeatmapCells } from '../entity';

type CreateRandomHeatmapCellOptions = Partial<HeatmapCell>;

/**
 * This factory is intended to be used by tests only.
 */
export const createRandomHeatmapCell = (
  options?: CreateRandomHeatmapCellOptions
): HeatmapCell => {
  return {
    color: options?.color || faker.helpers.arrayElement(cellColors),
    type: options?.type || faker.helpers.arrayElement(cellTypes),
  };
};

type CreateRandomHeatmapCellsOptions = CreateRandomHeatmapCellOptions & {
  cells?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const createRandomHeatmapCells = (
  options?: CreateRandomHeatmapCellsOptions
): HeatmapCells => {
  const cellType = options?.type;
  const numCells = options?.cells;

  return mapRange(
    () => createRandomHeatmapCell({ type: cellType }),
    numCells || 4
  ) as HeatmapCells;
};
