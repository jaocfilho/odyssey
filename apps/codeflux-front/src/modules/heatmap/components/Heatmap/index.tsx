import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';
import { WorkspacesArea } from '../WorkspacesArea';
import { useHeatmapScroll } from '../../hooks';

export const Heatmap = () => {
  const {
    calendarScroll,
    changeCalendarScroll,
    changeWorkspacesScroll,
    workspacesScroll,
  } = useHeatmapScroll();

  return (
    <Flex autoHorizontalMargin css={{ width: 700, height: 400 }}>
      {/* <Flex css={{ width: '100%', height: '100%' }}>
        <WorkspacesArea />
        <Flex direction="column" css={{ width: '100%', height: '100%' }}>
          <Timeline scroll={calendarScroll} />
          <CellsArea changeTimelineScroll={changeTimelineScroll} />
        </Flex>
      </Flex> */}

      <Flex fullHeight fullWidth gap={8}>
        <WorkspacesArea scroll={workspacesScroll} />
        <CellsArea
          changeWorkspacesScroll={changeWorkspacesScroll}
          changeCalendarScroll={changeCalendarScroll}
        />
      </Flex>
    </Flex>
  );
};
