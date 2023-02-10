import { Flex } from 'milky-ui';

import { HeatmapColumns as THeatmapColumns } from '../../entities';
import { HeatmapColumns } from '../HeatmapColumns';
import { HeatmapSidebar } from '../HeatmapSidebar';

type HeatmapContainerProps = {
  columns: THeatmapColumns;
};

export const HeatmapContainer = ({ columns }: HeatmapContainerProps) => {
  return (
    <Flex
      autoHorizontalMargin
      css={{
        width: 1440,
        height: 800,
      }}
    >
      <HeatmapSidebar />
      <Flex
        css={{
          overflow: 'auto',
        }}
      >
        <HeatmapColumns columns={columns} />
      </Flex>
    </Flex>
  );
};
