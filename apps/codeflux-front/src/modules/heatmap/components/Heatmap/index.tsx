import { Flex } from 'milky-ui';
import { Calendar } from '../Calendar';
import { CellsArea } from '../CellsArea';

import { HeatmapBody } from '../HeatmapBody';
import { HeatmapHeader } from '../HeatmapHeader';
import { HeatmapSidebar } from '../HeatmapSidebar';

export const OldHeatmap = () => {
  return (
    <Flex
      direction="column"
      autoHorizontalMargin
      css={{
        width: 1100,
        height: 700,
      }}
    >
      <Flex
        fullWidth
        fullHeight
        direction="column"
        css={{
          overflow: 'auto',
        }}
      >
        <HeatmapHeader />
        <HeatmapBody />
      </Flex>
    </Flex>
  );
};

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
        <CellsArea />
      </Flex>
    </Flex>
  );
};
