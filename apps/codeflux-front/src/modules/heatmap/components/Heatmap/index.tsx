import { Flex } from 'milky-ui';

import { useScroll } from '@satellite/react-hooks';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';
import { WorkspacesArea } from '../WorkspacesArea';

export const Heatmap = () => {
  const {
    scroll: timelineScroll,
    changeScrollLeftPosition: changeTimelineScroll,
  } = useScroll<HTMLDivElement>();

  return (
    <Flex autoHorizontalMargin css={{ width: 700, height: 400 }}>
      <Flex css={{ width: '100%', height: '100%' }}>
        <WorkspacesArea />
        <Flex direction="column" css={{ width: '100%', height: '100%' }}>
          <Timeline scroll={timelineScroll} />
          <CellsArea changeTimelineScroll={changeTimelineScroll} />
        </Flex>
      </Flex>
    </Flex>
  );
};
