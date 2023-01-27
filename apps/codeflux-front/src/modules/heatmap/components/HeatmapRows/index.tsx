import type { TCellsRow } from '../../types';

import { Flex } from 'milky-ui';

import { HeatmapRow } from '../HeatmapRow';
import { ROADMAP_ROW_GAP } from '../../constants';

type CellRowsProps = {
  rows: TCellsRow[];
};

export const HeatmapRows = ({ rows }: CellRowsProps) => {
  return (
    <Flex
      fullHeight
      direction="column"
      position="absolute"
      gap={ROADMAP_ROW_GAP}
      css={{ zIndex: 100 }}
    >
      {rows.map((row, index) => (
        <HeatmapRow key={index} {...row} />
      ))}
    </Flex>
  );
};
