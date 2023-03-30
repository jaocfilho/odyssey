import { HeatmapColumnInput, heatmapColumnSchema } from '../entity';

export const createHeatmapColumn = ({
  date,
  cells,
}: HeatmapColumnInput) => {
  const heatmapCell = heatmapColumnSchema.parse({ date, cells });

  return heatmapCell;
};
