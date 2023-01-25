import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { WorkspacesBody } from '../WorkspacesBody';

export const TimelineArea = () => {
  return (
    <Flex>
      <WorkspacesBody />
      <CellsArea />
    </Flex>
  );
};
