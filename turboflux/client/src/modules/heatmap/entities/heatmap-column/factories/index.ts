import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import { HeatmapColumn, HeatmapColumns } from '..';
import { HeatmapCell } from '../../heatmap-cell';
import { createRandomHeatmapCell } from '../../heatmap-cell/factories';

type CreateRandomHeatmapColumnOptions = Pick<Partial<HeatmapColumn>, 'date'> &
  Pick<Partial<HeatmapCell>, 'type'> & {
    cells?: number;
  };

export const createRandomHeatmapColumn = (
  options?: CreateRandomHeatmapColumnOptions
): HeatmapColumn => {
  const cellType = options?.type;
  const numCells = options?.cells;

  return {
    date: options?.date || faker.date.recent(),
    cells: mapRange(
      () => createRandomHeatmapCell({ type: cellType }),
      numCells || 4
    ) as HeatmapColumn['cells'],
  };
};

type CreateRandomHeatmapColumnsOptions = CreateRandomHeatmapColumnOptions & {
  columns?: number;
};

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
