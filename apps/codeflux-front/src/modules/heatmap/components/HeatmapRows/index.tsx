import type { TCellsRow } from '../../types';

import { Flex } from 'milky-ui';

import { HeatmapRow } from '../HeatmapRow';

type CellRowsProps = {
  rows: TCellsRow[];
};

export const HeatmapRows = ({ rows }: CellRowsProps) => {
  return (
    <Flex fullHeight direction="column" position="absolute" gap={4}>
      {rows.map((row, index) => (
        <HeatmapRow key={index} {...row} />
      ))}
    </Flex>
  );
};
