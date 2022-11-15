import type { TRoadmapCell } from "../../types";

import { Flex } from "milky-ui";

import { RoadmapCell } from "../RoadmapCell";

type RoadmapRowProps = {
  cells: TRoadmapCell[];
};

export const RoadmapRow = ({ cells }: RoadmapRowProps) => {
  return (
    <Flex>
      {cells.map((cell, index) => (
        <RoadmapCell key={index} {...cell} />
      ))}
    </Flex>
  );
};
