import { TColor } from "milky-ui";

type CellTypes = "starting" | "progress" | "ending" | "solo";

/**
 * This type represents a roadmap cell object.
 */
export type TRoadmapCell = {
  color: TColor;
  type: CellTypes;
};
