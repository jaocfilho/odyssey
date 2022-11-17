import { generateRoadmapBar } from "../../factories";
import { RoadmapRow } from "../RoadmapRow";

export const Roadmap = () => {
  const cells = generateRoadmapBar({ size: 5, color: "purple" });

  return (
    <RoadmapRow cells={cells} />
  );
};
