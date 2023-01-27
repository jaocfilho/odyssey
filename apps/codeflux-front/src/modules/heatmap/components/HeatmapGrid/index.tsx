import { ReactNode } from 'react';

import { Flex } from 'milky-ui';

import { HeatmapGridColumns } from '../HeatmapGridColumns';
import { HeatmapGridRows } from '../HeatmapGridRows';

type HeatmapGridProps = {
  rows: number;
  columns: number;
  children?: ReactNode;
};

export const HeatmapGrid = ({ columns, rows, children }: HeatmapGridProps) => {
  return (
    <Flex fullHeight fullWidth position="relative">
      <Flex position="absolute">{children}</Flex>
      <Flex position="relative">
        <HeatmapGridRows rows={rows} columns={columns} />
        <HeatmapGridColumns columns={columns} />
      </Flex>
    </Flex>
  );
};
