import { TColor } from 'milky-ui';

export type CellTypes = 'starting' | 'progress' | 'ending' | 'solo' | 'empty';

export type CellColors = TColor;

/**
 * This type represents a heatmap cell object.
 */
export type THeatmapCell = {
  color: CellColors;
  type: CellTypes;
};
