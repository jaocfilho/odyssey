import { HeatmapCell, HeatmapCellInput, heatmapCellSchema } from '../entity';

export const createHeatmapCellService = ({
  color,
  type,
}: HeatmapCellInput): HeatmapCell => {
  // TODO tests
  const heatmapCell = heatmapCellSchema.parse({ color, type });

  return heatmapCell;
};
