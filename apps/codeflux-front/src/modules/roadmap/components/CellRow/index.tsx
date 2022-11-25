import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { Cell } from "../Cell";

type CellRowProps = TRoadmapRow;

export const CellRow = ({ cells }: CellRowProps) => {
  return (
    <Flex>
      {cells.map((cell, index) => (
        <Cell key={index} {...cell} />
      ))}
    </Flex>
  );
};
