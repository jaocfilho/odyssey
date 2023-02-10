import { HeatmapColumnInput, heatmapColumnSchema } from '../entity';

export const createHeatmapColumnService = ({
  date,
  cells,
}: HeatmapColumnInput) => {
  // TODO tests
  const heatmapCell = heatmapColumnSchema.parse({ date, cells });

  return heatmapCell;
};
