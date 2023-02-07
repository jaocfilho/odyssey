import type { THeatmapCell } from '../../types';

type Color = THeatmapCell['color'];
type CellTypes = THeatmapCell['type'];

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

export const HEATMAP_CELL_WIDTH = '$space$20';
export const HEATMAP_CELL_HEIGHT = '$space$10';
