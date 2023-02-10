import { z } from 'zod';

import { heatmapCellSchema } from '../../heatmap-cell/entity';

export const heatmapColumnSchema = z.object({
  date: z.date(),
  cells: z.array(heatmapCellSchema),
});

export type HeatmapColumnInput = z.input<typeof heatmapColumnSchema>;
export type HeatmapColumn = z.infer<typeof heatmapColumnSchema>;
export type HeatmapColumns = HeatmapColumn[];
