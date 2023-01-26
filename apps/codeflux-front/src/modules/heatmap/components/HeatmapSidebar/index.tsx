import { Flex, Text } from 'milky-ui';

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
      <Flex p={4} bb={1} bbStyle="solid" bbColor="$gray6">
        <Text variant="h4">Workspaces</Text>
      </Flex>
      <WorkspaceSections workspaces={workspaces} />
    </Flex>
  );
};
