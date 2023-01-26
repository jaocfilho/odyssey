import type { TCellsRow } from '../../types';

import { Flex } from 'milky-ui';

import { CellRow } from '../CellRow';

type CellRowsProps = {
  rows: TCellsRow[];
};

export const HeatmapRows = ({ rows }: CellRowsProps) => {
  return (
    <Flex fullHeight direction="column" gap={4}>
      {rows.map((row, index) => (
        <CellRow key={index} {...row} />
      ))}
    </Flex>
  );
};
