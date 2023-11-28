import { Flex } from 'milky-ui';

import { Calendar } from '../Calendar';
import {
  HeatmapGridColumns,
  HeatmapGridColumnsProps,
} from '../HeatmapGridColumns';

type HeatmapGridProps = Pick<HeatmapGridColumnsProps, 'columns'>;

export const HeatmapColumns = ({ columns }: HeatmapGridProps) => {
  return (
    <Flex fullHeight fullWidth direction="column">
      <Calendar />
      <HeatmapGridColumns columns={columns} />
    </Flex>
  );
};
