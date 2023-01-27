import { Flex } from 'milky-ui';

import { HeatmapGridColumn } from '../HeatmapGridColumn';

type HeatmapGridColumnsProps = {
  columns: number;
};

export const HeatmapGridColumns = ({ columns }: HeatmapGridColumnsProps) => {
  const columnsMapper = [...new Array(columns)];

  return (
    <Flex fullHeight fullWidth role="heatmapColumns" position="absolute">
      {columnsMapper.map((_, index) => (
        <HeatmapGridColumn key={index} />
      ))}
    </Flex>
  );
};
