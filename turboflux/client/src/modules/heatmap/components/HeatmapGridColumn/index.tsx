import { Flex } from 'milky-ui';

import { HeatmapColumn } from '../../entities';
import { Cell } from '../Cell';

type HeatmapGridColumnProps = Pick<HeatmapColumn, 'cells'>;

export const HeatmapGridColumn = ({ cells }: HeatmapGridColumnProps) => {
  return (
    <Flex br={1} brStyle="solid" brColor="$gray6" direction="column" fullHeight>
      {cells.map((cell, index) => (
        <Cell key={index} {...cell} />
      ))}
    </Flex>
  );
};
