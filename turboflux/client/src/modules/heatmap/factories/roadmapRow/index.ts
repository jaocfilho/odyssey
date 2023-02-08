import { mapRange } from 'satellite';

import { CellColors, TCellsRow } from '../../types';
import {
  generateEmptyBar,
  generateRoadmapBar,
  GenerateRoadmapBarParams,
} from '../roadmapBar';
import { generateSoloCell } from '../roadmapCell';

type GenerateRoadmapRowParams = {
  size?: number;
  barProps?: GenerateRoadmapBarParams;
};

export const generateRoadmapRow = ({
  size = 5,
  barProps = { size: 5, color: 'purple' },
}: GenerateRoadmapRowParams = {}): TCellsRow[] => {
  const rows = mapRange(() => {
    const cells = generateRoadmapBar(barProps);
    return { cells };
  }, size);

  return rows as TCellsRow[];
};

type GenerateHeatmapRowParams = {
  color?: CellColors;
};

export const generateHeatmapRow = ({
  color = 'purple',
}: GenerateHeatmapRowParams = {}) => {
  const cells = [
    generateSoloCell({ color }), // 1
    ...generateEmptyBar(), //4
    ...generateRoadmapBar({ size: 5, color }), //9
    ...generateEmptyBar({ size: 4 }), //13
    ...generateRoadmapBar({ size: 9, color }), //22
    ...generateEmptyBar({ size: 2 }), //24
    ...generateRoadmapBar({ size: 6, color }), //30
  ];

  return cells;
};
