import { Flex, Text } from 'milky-ui';
import { TopAreaContainer } from '../TopAreaContainer';

import { WorkspaceSections } from '../WorkspaceSections';

export const HeatmapSidebar = () => {
  const workspaces = ['codeflux', 'mily-ui', 'satellite', 'orbitals'];

  return (
    <Flex
      direction="column"
      fullHeight
      br={1}
      brStyle="solid"
      brColor="$gray6"
      css={{ minWidth: 180 }}
    >
      <TopAreaContainer>
        <Flex p={4}>
          <Text variant="h4">Workspaces</Text>
        </Flex>
      </TopAreaContainer>
      <WorkspaceSections workspaces={workspaces} />
    </Flex>
  );
};
