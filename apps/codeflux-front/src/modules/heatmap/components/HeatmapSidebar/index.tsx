import { Flex, Text } from 'milky-ui';
import { HEATMAP_GRID_BORDER_RIGHT } from '../../constants';
import { TopAreaContainer } from '../TopAreaContainer';

import { WorkspaceSections } from '../WorkspaceSections';

export const HeatmapSidebar = () => {
  const workspaces = ['codeflux', 'mily-ui', 'satellite', 'orbitals'];

  return (
    <Flex
      direction="column"
      fullHeight
      {...HEATMAP_GRID_BORDER_RIGHT}
      css={{ minWidth: 180 }}
    >
      <TopAreaContainer border>
        <Flex p={4}>
          <Text variant="h4">Workspaces</Text>
        </Flex>
      </TopAreaContainer>
      <WorkspaceSections workspaces={workspaces} />
    </Flex>
  );
};
