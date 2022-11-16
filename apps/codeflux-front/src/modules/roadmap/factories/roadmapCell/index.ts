import type { TRoadmapCell } from "../../types";

import { faker } from "@faker-js/faker";

import { roadmapCellColors, roadmapCellTypes } from "../../constants";
import { callMultipleTimes } from "satellite";

export const generateRoadmapCell = (): TRoadmapCell => {
  const color = faker.helpers.arrayElement(roadmapCellColors);
  const type = faker.helpers.arrayElement(roadmapCellTypes);

  return { type, color };
};

export const generateRoadmapCellArray = (count = 5): TRoadmapCell[] => {
  const cells: TRoadmapCell[] = [];

  callMultipleTimes(() => {
    const cell = generateRoadmapCell();
    cells.push(cell);
  }, count);

  return cells;
};
