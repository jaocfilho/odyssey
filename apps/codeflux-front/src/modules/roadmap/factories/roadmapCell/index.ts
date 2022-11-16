import type { TRoadmapCell, CellTypes, CellColors } from "../../types";

import { faker } from "@faker-js/faker";

import { callMultipleTimes, getArrayDifference } from "satellite";

import { roadmapCellColors, roadmapCellTypes } from "../../constants";

type CreateRoadmapCellParams = {
  colorOptions: CellColors[];
  typeOptions: CellTypes[];
};

const createRoadmapCell = ({
  colorOptions,
  typeOptions,
}: CreateRoadmapCellParams): TRoadmapCell => {
  const color = faker.helpers.arrayElement(colorOptions);
  const type = faker.helpers.arrayElement(typeOptions);

  return { type, color };
};

type GenerateRoadmapCellParams = {
  excludedTypes?: CellTypes[];
};

export const generateRoadmapCell = (
  params: GenerateRoadmapCellParams = {}
): TRoadmapCell => {
  let { excludedTypes } = params;
  if (excludedTypes === undefined) {
    excludedTypes = [];
  }

  const typeOptions = getArrayDifference(roadmapCellTypes, excludedTypes);

  const cell = createRoadmapCell({
    colorOptions: roadmapCellColors,
    typeOptions,
  });

  return cell;
};

export const generateRoadmapCellArray = (
  count = 5,
  params: GenerateRoadmapCellParams = {}
): TRoadmapCell[] => {
  const cells: TRoadmapCell[] = [];

  callMultipleTimes(() => {
    const cell = generateRoadmapCell(params);
    cells.push(cell);
  }, count);

  return cells;
};
