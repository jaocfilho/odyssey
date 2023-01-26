import { Flex } from 'milky-ui';

import { WorkspacesAreaContainer } from '../WorkspacesAreaContainer';
import { WorkspaceSections } from '../WorkspaceSections';

export const WorkspacesBody = () => {
  const workspaces = ['codeflux', 'mily-ui', 'satellite', 'orbitals'];

  return (
    <WorkspacesAreaContainer>
      <Flex mr={8}>
        <WorkspaceSections workspaces={workspaces} />
      </Flex>
    </WorkspacesAreaContainer>
  );
};
