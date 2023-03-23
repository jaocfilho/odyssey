import { ReactNode } from 'react';

import { PageHeader } from './PageHeader';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const AuthenticatedPageShell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <div className="flex flex-col h-screen bg-slate-900">
      {/* <PageHeader /> */}
      {children}
    </div>
  );
};
