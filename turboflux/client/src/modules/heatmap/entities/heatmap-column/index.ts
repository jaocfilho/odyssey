import { z } from 'zod';

import { heatmapCellSchema } from '../heatmap-cell';

export const heatmapColumnSchema = z.object({
  date: z.date(),
  cells: z.array(heatmapCellSchema),
});

export type HeatmapColumn = z.infer<typeof heatmapColumnSchema>;
export type HeatmapColumns = HeatmapColumn[];
