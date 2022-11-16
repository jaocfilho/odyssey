import type { TRoadmapCell, CellTypes } from "../../types";

import { faker } from "@faker-js/faker";

import { callMultipleTimes } from "satellite";

import { roadmapCellColors, roadmapCellTypes } from "../../constants";

type GenerateRoadmapCellParams = {
  excludedTypes?: CellTypes[];
};

export const generateRoadmapCell = (
  params: GenerateRoadmapCellParams = {}
): TRoadmapCell => {
  const { excludedTypes } = params;

  // const types = roadmapCellTypes.filter((t) => {
  //   return !excludedTypes?.includes(t);
  // })

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
