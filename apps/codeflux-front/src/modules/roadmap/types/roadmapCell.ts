import { TColor } from "milky-ui";

export type CellTypes = "starting" | "progress" | "ending" | "solo" | "empty";

/**
 * This type represents a roadmap cell object.
 */
export type TRoadmapCell = {
  color: TColor;
  type: CellTypes;
};
