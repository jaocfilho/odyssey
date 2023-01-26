import type { TCellsRow } from '../../types';

import { Flex } from 'milky-ui';

import { Cell } from '../Cell';

type HeatmapRowProps = TCellsRow;

export const HeatmapRow = ({ cells }: HeatmapRowProps) => {
  return (
    <Flex>
      {cells.map((cell, index) => (
        <Cell key={index} {...cell} />
      ))}
    </Flex>
  );
};
