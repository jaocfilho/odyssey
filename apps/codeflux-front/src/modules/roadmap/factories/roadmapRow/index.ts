import type { CellColors, TRoadmapCell } from "../../types";

import { getRandomInt, inRange } from "satellite";
import { generateEmptyCell, generateSoloCell } from "../roadmapCell";
import { generateRoadmapBar } from "../roadmapBar";

const checkIsSolo = () => {
  const targetNumber = getRandomInt(1, 10);

  const isSolo = inRange({ targetNumber, min: 1, max: 3 });
  return isSolo;
};

type GenerateRoadmapRowParams = {
  size: number;
  color: CellColors;
};

export const generateRoadmapRow = ({
  size,
  color,
}: GenerateRoadmapRowParams) => {
  const row: TRoadmapCell[] = [];

  while (size > 0) {
    const isSolo = checkIsSolo();

    switch (isSolo) {
      case true:
        const cell = generateSoloCell({ color });
        row.push(cell);

        size -= 1;
        break;

      case false:
        const barSize = getRandomInt(3, 5);

        if (size <= barSize) {
          const emptyCell = generateEmptyCell();
          row.push(emptyCell);

          size = 0;
          break;
        }

        // create a roadmap bar and add its elements to row.
        const roadmapBar = generateRoadmapBar({ size: barSize, color });
        row.concat(roadmapBar);

        size -= barSize;
        break;

      default:
        break;
    }
  }

  return row;
};
