import { TColor } from "milky-ui";

export type CellTypes = "starting" | "progress" | "ending" | "solo" | "empty";

export type CellColors = TColor;

/**
 * This type represents a roadmap cell object.
 */
export type TRoadmapCell = {
  color: CellColors;
  type: CellTypes;
};
