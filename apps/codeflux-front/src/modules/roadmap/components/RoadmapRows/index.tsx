import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { Row } from "../Row";

type RoadmapRowsProps = {
  rows: TRoadmapRow[];
};

export const RoadmapRows = ({ rows }: RoadmapRowsProps) => {
  return (
    <Flex direction="column" gap={4}>
      {rows.map((row, index) => (
        <Row key={index} {...row} />
      ))}
    </Flex>
  );
};
