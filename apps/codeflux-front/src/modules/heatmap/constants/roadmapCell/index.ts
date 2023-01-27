import type { TRoadmapCell } from '../../types';

type Color = TRoadmapCell['color'];
type CellTypes = TRoadmapCell['type'];

export const roadmapCellColors: Color[] = [
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

export const roadmapCellTypes: CellTypes[] = [
  'ending',
  'progress',
  'solo',
  'starting',
  'empty',
];

export const ROADMAP_CELL_WIDTH = '$space$16';
export const ROADMAP_CELL_HEIGHT = '$space$10';
