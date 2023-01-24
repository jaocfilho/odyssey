import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { WorkspacesArea } from '../WorkspacesArea';

export const TimelineArea = () => {
  return (
    <Flex>
      <WorkspacesArea />
      <CellsArea />
    </Flex>
  );
};
