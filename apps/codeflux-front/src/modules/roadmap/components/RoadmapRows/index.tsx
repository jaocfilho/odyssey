import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { RoadmapRow } from "../RoadmapRow";

type RoadmapRowsProps = {
  rows: TRoadmapRow[];
};

export const RoadmapRows = ({ rows }: RoadmapRowsProps) => {
  return (
    <Flex direction="column" gap={4}>
      {rows.map((row, index) => (
        <RoadmapRow key={index} {...row} />
      ))}
    </Flex>
  );
};
