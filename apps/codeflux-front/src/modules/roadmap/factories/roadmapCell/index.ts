import type { TRoadmapCell, CellTypes, CellColors } from "../../types";

import { faker } from "@faker-js/faker";

import { callMultipleTimes } from "satellite";

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
  const { excludedTypes } = params;

  // const types = roadmapCellTypes.filter((t) => {
  //   return !excludedTypes?.includes(t);
  // })

  const cell = createRoadmapCell({
    colorOptions: roadmapCellColors,
    typeOptions: roadmapCellTypes,
  });
  return cell;
};

export const generateRoadmapCellArray = (count = 5): TRoadmapCell[] => {
  const cells: TRoadmapCell[] = [];

  callMultipleTimes(() => {
    const cell = generateRoadmapCell();
    cells.push(cell);
  }, count);

  return cells;
};
