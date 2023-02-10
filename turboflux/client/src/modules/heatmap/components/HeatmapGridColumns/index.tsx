import { Flex } from 'milky-ui';

import { HeatmapColumns } from '../../entities';
import { HeatmapGridColumn } from '../HeatmapGridColumn';

export type HeatmapGridColumnsProps = {
  columns: HeatmapColumns;
};

export const HeatmapGridColumns = ({ columns }: HeatmapGridColumnsProps) => {
  return (
    <Flex fullHeight fullWidth role="heatmapColumns">
      {columns.map(({ date, cells }) => (
        <HeatmapGridColumn key={date.toString()} cells={cells} />
      ))}
    </Flex>
  );
};
