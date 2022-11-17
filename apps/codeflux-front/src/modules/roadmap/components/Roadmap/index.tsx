import { generateRoadmapCellArray } from "../../factories";
import { RoadmapRow } from "../RoadmapRow";

export const Roadmap = () => {
  const cells = generateRoadmapCellArray(20);

  return (
    <RoadmapRow cells={cells} />
  );
};
