import { Flex } from 'milky-ui';

import { HeatmapGridColumns } from '../HeatmapGridColumns';
import { HeatmapGridRows } from '../HeatmapGridRows';
import { TCellsRow } from '../../types';

type HeatmapGridProps = {
  rows: TCellsRow[];
  columns: number;
};

export const HeatmapGrid = ({ columns, rows }: HeatmapGridProps) => {
  return (
    <Flex fullHeight fullWidth position="relative">
      <Flex position="relative">
        <HeatmapGridRows rows={rows} />
        <HeatmapGridColumns columns={columns} />
      </Flex>
    </Flex>
  );
};
