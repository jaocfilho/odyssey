import { z } from 'zod';

import { themeColors } from '../../../theme';

const cellTypes = ['starting', 'progress', 'ending', 'solo', 'empty'] as const;

const type = z.enum(cellTypes);
const color = z.enum(themeColors);

export const heatmapCellSchema = z.object({
  color,
  type,
});

export type HeatmapCell = z.infer<typeof heatmapCellSchema>;
export type HeatmapCells = HeatmapCell[];
