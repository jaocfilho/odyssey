import { Flex } from 'milky-ui';

import { Calendar } from '../Calendar';
import { useHeatmapScroll } from '../../hooks';
import { TimelineArea } from '../TimelineArea';

export const Heatmap = () => {
  const { calendarScroll, changeCalendarScroll } = useHeatmapScroll();

  return (
    <Flex
      direction="column"
      autoHorizontalMargin
      css={{
        width: 700,
        height: 400,
      }}
    >
      <Calendar scroll={calendarScroll} />
      <TimelineArea changeCalendarScroll={changeCalendarScroll} />
    </Flex>
  );
};
