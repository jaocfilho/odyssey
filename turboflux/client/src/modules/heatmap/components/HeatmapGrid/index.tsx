import { Flex } from 'milky-ui';

import {
  HeatmapGridColumns,
  HeatmapGridColumnsProps,
} from '../HeatmapGridColumns';
import { HeatmapGridRows } from '../HeatmapGridRows';
import { TCellsRow } from '../../types';

type HeatmapGridProps = Pick<HeatmapGridColumnsProps, 'columns'> & {
  rows: TCellsRow[];
};

export const HeatmapGrid = ({ columns, rows }: HeatmapGridProps) => {
  return (
    <Flex fullHeight fullWidth position="relative">
      <Flex position="relative">
        {/* <HeatmapGridRows rows={rows} /> */}
        <HeatmapGridColumns columns={columns} />
      </Flex>
    </Flex>
  );
};
