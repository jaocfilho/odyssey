import { Flex } from 'milky-ui';

import { Calendar } from '../Calendar';
import { HeatmapBody } from '../HeatmapBody';
import { HeatmapHeader } from '../HeatmapHeader';

export const Heatmap = () => {
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
