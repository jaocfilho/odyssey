import { ReactNode } from 'react';

import { Flex } from 'milky-ui';

import { PageHeader } from './PageHeader';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const AuthenticatedPageShell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <Flex direction="column" fullHeight>
      <PageHeader />
      {children}
    </Flex>
  );
};
