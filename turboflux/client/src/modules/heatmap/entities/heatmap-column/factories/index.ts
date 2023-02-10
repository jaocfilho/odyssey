import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import { HeatmapColumn, HeatmapColumns } from '..';
import { HeatmapCell } from '../../heatmap-cell';
import { createRandomHeatmapCells } from '../../heatmap-cell';

type CreateRandomHeatmapColumnOptions = Pick<Partial<HeatmapColumn>, 'date'> &
  Pick<Partial<HeatmapCell>, 'type'> & {
    cells?: number;
  };

/**
 * This factory is intended to be used by tests only.
 */
export const createRandomHeatmapColumn = (
  options?: CreateRandomHeatmapColumnOptions
): HeatmapColumn => {
  const cellType = options?.type;
  const numCells = options?.cells;

  return {
    date: options?.date || faker.date.recent(),
    cells: createRandomHeatmapCells({ cells: numCells, type: cellType }),
  };
};

type CreateRandomHeatmapColumnsOptions = CreateRandomHeatmapColumnOptions & {
  columns?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const createRandomHeatmapColumns = (
  options?: CreateRandomHeatmapColumnsOptions
): HeatmapColumns => {
  const numColumns = options?.columns ?? 15;
  const cellType = options?.type;
  const numCells = options?.cells;

  return mapRange(
    () => createRandomHeatmapColumn({ cells: numCells, type: cellType }),
    numColumns
  ) as HeatmapColumns;
};
