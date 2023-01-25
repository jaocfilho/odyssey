import { Flex } from 'milky-ui';

import { Calendar } from '../Calendar';
import { WorkspacesHeader } from '../WorkspacesHeader';

export const HeatmapHeader = () => {
  return (
    <Flex>
      <WorkspacesHeader />
      <Calendar />
    </Flex>
  );
};
