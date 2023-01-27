import { Flex } from 'milky-ui';
import { ROADMAP_ROW_GAP } from '../../constants';

import { HeatmapGridRow } from '../HeatmapGridRow';

type HeatmapGridRowsProps = {
  rows: number;
  columns: number;
};

export const HeatmapGridRows = ({ rows, columns }: HeatmapGridRowsProps) => {
  const rowsMapper = [...new Array(rows)];

  return (
    <Flex direction="column" role="heatmapRows" gap={ROADMAP_ROW_GAP}>
      {rowsMapper.map((_, index) => (
        <HeatmapGridRow key={index} size={columns} />
      ))}
    </Flex>
  );
};
