import type { TRoadmapRow } from "../../types";

import { Flex } from "milky-ui";

import { CellRow } from "../CellRow";

type CellRowsProps = {
  rows: TRoadmapRow[];
};

export const CellRows = ({ rows }: CellRowsProps) => {
  return (
    <Flex direction="column" gap={4}>
      {rows.map((row, index) => (
        <CellRow key={index} {...row} />
      ))}
    </Flex>
  );
};
