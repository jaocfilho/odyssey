import { z } from 'zod';

import { themeColors } from '../../../../theme';

export const cellColors = themeColors;
export const cellTypes = [
  'starting',
  'progress',
  'ending',
  'solo',
  'empty',
] as const;

const type = z.enum(cellTypes);
const color = z.enum(cellColors);

export const heatmapCellSchema = z.object({
  color,
  type,
});

type THeatmapCellSchema = typeof heatmapCellSchema;
export type HeatmapCellInput = z.input<THeatmapCellSchema>;
export type HeatmapCell = z.output<THeatmapCellSchema>;
export type HeatmapCells = HeatmapCell[];
