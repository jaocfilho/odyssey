import { Flex } from 'milky-ui';

import { WorkspacesAreaContainer } from '../WorkspacesAreaContainer';
import { WorkspaceSection } from '../WorkspaceSection';

export const WorkspacesBody = () => {
  return (
    <WorkspacesAreaContainer>
      <Flex direction="column" mr={8}>
        <WorkspaceSection repository="codeflux" />
        <WorkspaceSection repository="milky-ui" />
        <WorkspaceSection repository="satellite" />
        <WorkspaceSection repository="orbitals" />
      </Flex>
    </WorkspacesAreaContainer>
  );
};
