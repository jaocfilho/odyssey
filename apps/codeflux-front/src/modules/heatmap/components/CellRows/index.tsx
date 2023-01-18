import type { TCellsRow } from "../../types";

import { Flex } from "milky-ui";

import { CellRow } from "../CellRow";

type CellRowsProps = {
  rows: TCellsRow[];
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
