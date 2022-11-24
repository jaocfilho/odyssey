import { ScrollArea } from "milky-ui";

import { generateRoadmapBar } from "../../factories";
import { RoadmapRow } from "../RoadmapRow";

export const Roadmap = () => {
  const cells = generateRoadmapBar({ size: 120, color: "purple" });

  return (
    <ScrollArea css={{ width: 650, height: 200 }}>
      <RoadmapRow cells={cells} />
    </ScrollArea>
  );
};
