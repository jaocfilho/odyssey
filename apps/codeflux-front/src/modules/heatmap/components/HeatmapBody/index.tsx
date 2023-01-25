import { Flex } from 'milky-ui';

import { CellsArea } from '../CellsArea';
import { WorkspacesBody } from '../WorkspacesBody';

export const HeatmapBody = () => {
  return (
    <Flex>
      <WorkspacesBody />
      <CellsArea />
    </Flex>
  );
};
