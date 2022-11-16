import type { TRoadmapCell } from "../../types";

import { faker } from "@faker-js/faker";

import { roadmapCellColors, roadmapCellTypes } from "../../constants";

export const generateRoadmapCell = (): TRoadmapCell => {
  const color = faker.helpers.arrayElement(roadmapCellColors);
  const type = faker.helpers.arrayElement(roadmapCellTypes);

  return { type, color };
};

export const generateRoadmapCellArray = (count = 5): TRoadmapCell[] => {
  return [...new Array(count)].map(() => generateRoadmapCell());
};
