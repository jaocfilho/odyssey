import { Flex } from 'milky-ui';

import { TCellsRow } from '../../types';
import { HeatmapGridRow } from '../HeatmapGridRow';

type HeatmapGridRowsProps = {
  rows: TCellsRow[];
};

export const HeatmapGridRows = ({ rows }: HeatmapGridRowsProps) => {
  return (
    <Flex direction="column" role="heatmapRows" css={{ zIndex: 100 }}>
      {rows.map((row, index) => (
        <Flex key={index} bb={1} bbStyle="solid" bbColor="$gray6">
          <HeatmapGridRow {...row} />
        </Flex>
      ))}
    </Flex>
  );
};
