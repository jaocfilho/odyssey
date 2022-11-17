import type { CellColors, TRoadmapCell } from "../../types";

import { callMultipleTimes } from "satellite";

import {
  generateEndingCell,
  generateStartingCell,
  generateProgressCell,
} from "../roadmapCell";

type CreateProgressCellsParams = {
  count: number;
  color?: CellColors;
};

const createProgressCells = ({ count, color }: CreateProgressCellsParams) => {
  const progressCells: TRoadmapCell[] = [];

  callMultipleTimes(() => {
    const cell = generateProgressCell({ color });
    progressCells.push(cell);
  }, count);

  return progressCells;
};

type GenerateRoadmapBarParams = {
  size: number;
  color?: CellColors;
};

export const generateRoadmapBar = ({
  size,
  color,
}: GenerateRoadmapBarParams) => {
  const starting = generateStartingCell({ color });
  const ending = generateEndingCell({ color });

  const count = size - 2;
  const progressCells = createProgressCells({ count, color });

  const roadmapBar = [starting, ...progressCells, ending];
  return roadmapBar;
};
