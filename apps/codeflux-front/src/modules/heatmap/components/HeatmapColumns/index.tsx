import { Flex } from 'milky-ui';

import { HeatmapColumn } from '../HeatmapColumn';

type HeatmapColumnsProps = {
  columns: number;
};

export const HeatmapColumns = ({ columns }: HeatmapColumnsProps) => {
  const columnsMapper = [...new Array(columns)];

  return (
    <Flex fullHeight fullWidth role="heatmapColumns">
      {columnsMapper.map((_, index) => (
        <HeatmapColumn key={index} />
      ))}
    </Flex>
  );
};
