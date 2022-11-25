import { ScrollArea } from "milky-ui";

import { generateRoadmapBar } from "../../factories";
import { RoadmapRows } from "../RoadmapRows";

export const Roadmap = () => {
  const purple = generateRoadmapBar({ size: 48, color: "purple" });
  const crimson = generateRoadmapBar({ size: 72, color: "crimson" })
  const cyan = generateRoadmapBar({ size: 34, color: "cyan" })
  const red = generateRoadmapBar({ size: 51, color: "red" })

  const rows = [
    { cells: purple },
    { cells: crimson },
    { cells: cyan },
    { cells: red },
  ]

  return (
    <ScrollArea css={{ width: 650, height: 200 }}>
      <RoadmapRows rows={rows} />
    </ScrollArea>
  );
};
