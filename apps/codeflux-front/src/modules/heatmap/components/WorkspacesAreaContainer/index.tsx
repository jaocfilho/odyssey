import { ReactNode } from 'react';

import { Flex } from 'milky-ui';

type WorkspacesAreaContainerProps = {
  children: ReactNode;
};

/**
 * This components is used to maintain consistency between the sticky
 * parts of the heatmap. It is meant to be used on the workspaces area.
 *
 */
export const WorkspacesAreaContainer = ({
  children,
}: WorkspacesAreaContainerProps) => {
  return (
    <Flex appBackgroundColor position="sticky" css={{ left: 0 }}>
      {children}
    </Flex>
  );
};
