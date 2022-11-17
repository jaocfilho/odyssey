import type { TRoadmapCell, CellTypes, CellColors } from "../../types";

import { faker } from "@faker-js/faker";

import { callMultipleTimes, getArrayDifference } from "satellite";

import { roadmapCellColors, roadmapCellTypes } from "../../constants";

type CreateRoadmapCellParams = {
  colorOptions: CellColors[];
  typeOptions: CellTypes[];
  type?: CellTypes;
  color?: CellColors;
};

const createRoadmapCell = ({
  colorOptions,
  typeOptions,
  color = undefined,
  type = undefined,
}: CreateRoadmapCellParams): TRoadmapCell => {
  if (color === undefined) {
    color = faker.helpers.arrayElement(colorOptions);
  }

  if (type === undefined) {
    type = faker.helpers.arrayElement(typeOptions);
  }

  return { type, color };
};

/**
 * Returns an array containing all possible roadmap cell types
 * if no param is passed.
 *
 */
const getTypeOptions = (excludedTypes: CellTypes[] = []) => {
  if (excludedTypes.length === 0) return roadmapCellTypes;

  const typeOptions = getArrayDifference(roadmapCellTypes, excludedTypes);

  return typeOptions;
};

/**
 * Returns an array containing all possible roadmap cell colors
 * if no param is passed.
 *
 */
const getColorOptions = (excludedColors: CellColors[] = []) => {
  if (excludedColors.length === 0) return roadmapCellColors;

  const colorOptions = getArrayDifference(roadmapCellColors, excludedColors);

  return colorOptions;
};

type GenerateRoadmapCellParams = {
  excludedTypes?: CellTypes[];
  excludedColors?: CellColors[];
  type?: CellTypes;
  color?: CellColors;
};

export const generateRoadmapCell = ({
  excludedTypes,
  excludedColors,
  color,
  type,
}: GenerateRoadmapCellParams = {}): TRoadmapCell => {
  const typeOptions = getTypeOptions(excludedTypes);
  const colorOptions = getColorOptions(excludedColors);

  const cell = createRoadmapCell({
    colorOptions,
    typeOptions,
    color,
    type,
  });

  return cell;
};

type GenerateStartingCellParams = {
  excludedColors?: CellColors[];
  color?: CellColors;
};

export const generateStartingCell = ({
  color,
  excludedColors,
}: GenerateStartingCellParams = {}) => {
  return generateRoadmapCell({ type: "starting", color, excludedColors });
};

type GenerateEndingCellParams = {
  excludedColors?: CellColors[];
  color?: CellColors;
};

export const generateEndingCell = ({
  color,
  excludedColors,
}: GenerateEndingCellParams = {}) => {
  return generateRoadmapCell({ type: "ending", color, excludedColors });
};

type GenerateSoloCellParams = {
  excludedColors?: CellColors[];
  color?: CellColors;
};

export const generateSoloCell = ({
  color,
  excludedColors,
}: GenerateSoloCellParams = {}) => {
  return generateRoadmapCell({ type: "solo", color, excludedColors });
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
