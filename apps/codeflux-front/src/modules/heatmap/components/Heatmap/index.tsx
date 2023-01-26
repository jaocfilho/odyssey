import { Flex } from 'milky-ui';

import { Calendar } from '../Calendar';
import { HeatmapGrid } from '../HeatmapGrid';
import { HeatmapSidebar } from '../HeatmapSidebar';

export const Heatmap = () => {
  return (
    <Flex
      autoHorizontalMargin
      css={{
        width: 1100,
        height: 700,
      }}
    >
      <HeatmapSidebar />
      <Flex
        direction="column"
        css={{
          overflow: 'auto',
        }}
      >
        <Calendar />
        <HeatmapGrid />
      </Flex>
    </Flex>
  );
};
