import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { RoadmapCell } from "../RoadmapCell";

type RoadmapRowProps = TRoadmapRow;

export const RoadmapRow = ({ cells }: RoadmapRowProps) => {
  return (
    <Flex>
      {cells.map((cell, index) => (
        <RoadmapCell key={index} {...cell} />
      ))}
    </Flex>
  );
};
