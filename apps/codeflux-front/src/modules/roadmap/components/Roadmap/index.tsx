import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { Timeline } from '../Timeline';

export const Roadmap = () => {
  return (
    <Flex autoHorizontalMargin>
      <Flex direction="column">
        <Timeline />
        <CellsArea />
      </Flex>
    </Flex>
  );
};
