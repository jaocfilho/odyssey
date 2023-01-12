import { useState } from 'react';

import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';

export const Roadmap = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (newValue: number) => setScroll(newValue);

  console.log(scroll);

  return (
    <Flex autoHorizontalMargin>
      <Flex direction="column" css={{ width: 700, height: 400 }}>
        <Timeline />
        <CellsArea handleScroll={handleScroll} />
      </Flex>
    </Flex>
  );
};
