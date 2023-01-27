import type { TCellsRow } from '../../types';

import { Flex } from 'milky-ui';

import { Cell } from '../Cell';

type HeatmapGridRowProps = TCellsRow;

export const HeatmapGridRow = ({ cells }: HeatmapGridRowProps) => {
  return (
    <Flex my={2}>
      {cells.map((cell, index) => (
        <Cell key={index} {...cell} />
      ))}
    </Flex>
  );
};
