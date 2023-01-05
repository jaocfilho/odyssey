import { ScrollArea } from "milky-ui";

import { generateRoadmapBar } from "../../factories";
import { CellRows } from "../CellRows";

export const CellsArea = () => {
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
    <ScrollArea css={{ width: 700, height: 400 }}>
      <CellRows rows={rows} />
    </ScrollArea>
  );
};