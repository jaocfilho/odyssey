import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';
import { WorkspacesArea } from '../WorkspacesArea';
import { useHeatmapScroll } from '../../hooks';

export const Heatmap = () => {
  const { calendarScroll, changeCalendarScroll } = useHeatmapScroll();

  return (
    <Flex
      autoHorizontalMargin
      css={{
        overflow: 'auto',
        width: 700,
        height: 400,
      }}
    >
      <WorkspacesArea />
      <CellsArea changeCalendarScroll={changeCalendarScroll} />
    </Flex>
  );
};
