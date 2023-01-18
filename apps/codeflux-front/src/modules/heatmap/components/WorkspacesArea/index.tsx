import { RefObject } from 'react';

import { Flex } from 'milky-ui';

import { WorkspaceSection } from '../WorkspaceSection';

type WorkspacesAreaProps = {
  scroll: RefObject<HTMLDivElement>;
};

export const WorkspacesArea = ({ scroll }: WorkspacesAreaProps) => {
  return (
    <Flex
      fullHeight
      css={{
        overflow: 'hidden',
      }}
      direction="column"
      noShrink
      ref={scroll}
    >
      <WorkspaceSection repository="codeflux" />
      <WorkspaceSection repository="milky-ui" />
      <WorkspaceSection repository="satellite" />
      <WorkspaceSection repository="orbitals" />
    </Flex>
  );
};
