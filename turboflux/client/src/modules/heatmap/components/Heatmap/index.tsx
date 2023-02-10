import { Flex } from 'milky-ui';

import { createRandomHeatmapColumns } from '../../entities';
import { HeatmapContextProvider } from '../HeatmapContextProvider';
import { HeatmapColumns } from '../HeatmapColumns';
import { HeatmapSidebar } from '../HeatmapSidebar';

const HeatmapBase = () => {
  const columns = createRandomHeatmapColumns({ type: 'progress' });

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

export const Heatmap = () => {
  return (
    <HeatmapContextProvider>
      <HeatmapBase />
    </HeatmapContextProvider>
  );
};
