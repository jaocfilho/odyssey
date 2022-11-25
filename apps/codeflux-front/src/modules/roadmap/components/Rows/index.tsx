import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { CellRow } from "../CellRow";

type RoadmapRowsProps = {
  rows: TRoadmapRow[];
};

export const Rows = ({ rows }: RoadmapRowsProps) => {
  return (
    <Flex direction="column" gap={4}>
      {rows.map((row, index) => (
        <CellRow key={index} {...row} />
      ))}
    </Flex>
  );
};
