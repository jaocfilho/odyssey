import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import { HeatmapColumn, HeatmapColumns } from '..';
import { createRandomHeatmapCell } from '../../heatmap-cell/factories';

type CreateRandomHeatmapCellOptions = Pick<Partial<HeatmapColumn>, 'date'> & {
  cells?: number;
};

export const createRandomHeatmapColumn = (
  options?: CreateRandomHeatmapCellOptions
): HeatmapColumn => {
  return {
    date: options?.date || faker.date.recent(),
    cells: mapRange(
      () => createRandomHeatmapCell(),
      options?.cells || 4
    ) as HeatmapColumn['cells'],
  };
};

export const createRandomHeatmapColumns = (options?: {
  columns?: number;
  cells?: number;
}): HeatmapColumns => {
  const numColumns = options?.columns ?? 15;

  return mapRange(
    () => createRandomHeatmapColumn({ cells: options?.cells }),
    numColumns
  ) as HeatmapColumns;
};
