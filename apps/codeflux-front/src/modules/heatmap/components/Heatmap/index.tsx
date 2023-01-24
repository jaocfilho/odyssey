import { Flex } from 'milky-ui';

import { Calendar } from '../Calendar';
import { TimelineArea } from '../TimelineArea';

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
        <Calendar />
        <TimelineArea />
      </Flex>
    </Flex>
  );
};
