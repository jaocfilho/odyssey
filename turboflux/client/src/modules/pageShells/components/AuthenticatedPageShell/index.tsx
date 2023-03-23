import { ReactNode } from 'react';

import { PageHeader } from './PageHeader';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const AuthenticatedPageShell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <div>
      <PageHeader />
      {children}
    </div>
  );
};
