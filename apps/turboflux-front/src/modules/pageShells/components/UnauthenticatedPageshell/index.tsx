import { ReactNode } from 'react';

import { Flex } from 'milky-ui';

type UnauthenticatedPageshellProps = {
  children: ReactNode;
};

export const UnauthenticatedPageshell = ({
  children,
}: UnauthenticatedPageshellProps) => {
  return (
    <Flex direction="column" fullHeight>
      {children}
    </Flex>
  );
};
