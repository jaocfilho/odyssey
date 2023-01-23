import { Flex } from 'milky-ui';

import { WorkspaceSection } from '../WorkspaceSection';

export const WorkspacesArea = () => {
  return (
    <Flex position="sticky" css={{ left: 0, bgColor: '$gray1' }}>
      <Flex direction="column" mr={8} fullHeight fullWidth>
        <WorkspaceSection repository="codeflux" />
        <WorkspaceSection repository="milky-ui" />
        <WorkspaceSection repository="satellite" />
        <WorkspaceSection repository="orbitals" />
      </Flex>
    </Flex>
  );
};
