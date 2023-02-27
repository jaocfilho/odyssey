import { getDates } from '@orbital/dayjs';

import { HeatmapColumns } from '../../../entities';
import { createHeatmapColumn } from '../../../entities/heatmap-column';

export type HeatmapState = {
  columns: HeatmapColumns;
};

const getInitialColumns = (): HeatmapColumns => {
  const startDateOffset = 10;
  const endDateOffset = 10;

  const dates = getDates(startDateOffset, endDateOffset);

  return dates.map((date) =>
    createHeatmapColumn({
      date: date.toDate(),
    })
  );
};

export const initialState: HeatmapState = {
  columns: getInitialColumns(),
};
