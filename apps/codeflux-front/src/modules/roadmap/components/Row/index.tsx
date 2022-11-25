import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { Cell } from "../Cell";

type RoadmapRowProps = TRoadmapRow;

export const Row = ({ cells }: RoadmapRowProps) => {
  return (
    <Flex>
      {cells.map((cell, index) => (
        <Cell key={index} {...cell} />
      ))}
    </Flex>
  );
};
