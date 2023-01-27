import type { TRoadmapCell } from '../../types';

type Color = TRoadmapCell['color'];
type CellTypes = TRoadmapCell['type'];

export const heatmapCellColors: Color[] = [
  'blue',
  'crimson',
  'cyan',
  'gray',
  'green',
  'indigo',
  'plum',
  'purple',
  'red',
  'teal',
  'violet',
];

export const heatmapCellTypes: CellTypes[] = [
  'ending',
  'progress',
  'solo',
  'starting',
  'empty',
];

export const HEATMAP_CELL_WIDTH = '$space$16';
export const HEATMAP_CELL_HEIGHT = '$space$10';
