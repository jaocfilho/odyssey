import { Flex, Text } from 'milky-ui';

import { WorkspacesAreaContainer } from '../WorkspacesAreaContainer';

export const WorkspacesHeader = () => {
  return (
    <WorkspacesAreaContainer>
      <Flex alignItems="center" justifyContent="center">
        <Text variant="h4">Workspaces</Text>
      </Flex>
    </WorkspacesAreaContainer>
  );
};
