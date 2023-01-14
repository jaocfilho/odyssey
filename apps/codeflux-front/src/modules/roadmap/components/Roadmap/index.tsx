import { Flex } from 'milky-ui';

import { useScroll } from '@satellite/react-hooks';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';

export const Roadmap = () => {
  const {
    scroll: timelineScroll,
    changeScrollLeftPosition: changeTimelineScroll,
  } = useScroll<HTMLDivElement>();

  return (
    <Flex autoHorizontalMargin>
      <Flex direction="column" css={{ width: 700, height: 400 }}>
        <Timeline scroll={timelineScroll} />
        <CellsArea changeTimelineScroll={changeTimelineScroll} />
      </Flex>
    </Flex>
  );
};
