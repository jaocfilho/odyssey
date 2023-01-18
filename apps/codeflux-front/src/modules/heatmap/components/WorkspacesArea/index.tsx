import { Flex } from 'milky-ui';

import { WorkspaceSection } from '../WorkspaceSection';

export const WorkspacesArea = () => {
  return (
    <Flex direction="column" gap={4}>
      <WorkspaceSection repository="codeflux" />
      <WorkspaceSection repository="milky-ui" />
      <WorkspaceSection repository="satellite" />
      <WorkspaceSection repository="orbitals" />
    </Flex>
  );
};
