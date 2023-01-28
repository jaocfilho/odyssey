import type { CellColors, THeatmapCell } from '../../types';

import { callMultipleTimes } from 'satellite';

import {
  generateEndingCell,
  generateStartingCell,
  generateProgressCell,
  generateEmptyCell,
} from '../roadmapCell';

type CreateProgressCellsParams = {
  count: number;
  color?: CellColors;
};

const createProgressCells = ({ count, color }: CreateProgressCellsParams) => {
  const progressCells: THeatmapCell[] = [];

  callMultipleTimes(() => {
    const cell = generateProgressCell({ color });
    progressCells.push(cell);
  }, count);

  return progressCells;
};

type GenerateEmptyBarParams = {
  size?: number;
};

export const generateEmptyBar = ({ size = 3 }: GenerateEmptyBarParams = {}) => {
  const cells: THeatmapCell[] = [];

  callMultipleTimes(() => {
    const cell = generateEmptyCell();
    cells.push(cell);
  }, 3);

  return cells;
};

export type GenerateRoadmapBarParams = {
  size: number;
  color: CellColors;
};

/**
 * Creates a roadmap bar.
 *
 * A roadmap bar happens when in a sequence of roadmap cells,
 * the first cell is a `starting` cell, the last cell is an `ending`
 * cell and all the cells in between are `progress` cells.
 *
 * You can customize it by passing `size` and `color` values.
 *
 * @param size An integer.
 * @param color A string.
 *
 */
export const generateRoadmapBar = ({
  size,
  color,
}: GenerateRoadmapBarParams) => {
  if (size < 2) {
    throw new Error('roadmap bar size must be bigger than 2.');
  }

  const starting = generateStartingCell({ color });
  const ending = generateEndingCell({ color });

  const count = size - 2;
  const progressCells = createProgressCells({ count, color });

  const roadmapBar = [starting, ...progressCells, ending];
  return roadmapBar;
};
