import { useState } from 'react';

import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';

export const Roadmap = () => {
  const [scrollPosition, setScroll] = useState(300);

  const changeScrollPosition = (newValue: number) => setScroll(newValue);

  return (
    <Flex autoHorizontalMargin>
      <Flex direction="column" css={{ width: 700, height: 400 }}>
        <Timeline scrollPosition={scrollPosition} />
        <CellsArea changeScrollPosition={changeScrollPosition} />
      </Flex>
    </Flex>
  );
};
