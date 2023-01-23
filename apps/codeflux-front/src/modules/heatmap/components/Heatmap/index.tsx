import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { Calendar } from '../Calendar';
import { WorkspacesArea } from '../WorkspacesArea';
import { useHeatmapScroll } from '../../hooks';

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
      <Flex
        fullWidth
        fullHeight
        css={{
          overflow: 'auto',
        }}
      >
        <WorkspacesArea />
        <CellsArea changeCalendarScroll={changeCalendarScroll} />
      </Flex>
    </Flex>
  );
};
