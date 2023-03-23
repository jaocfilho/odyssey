import { ReactNode } from 'react';

import { Sidebar } from '../Sidebar';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const AuthenticatedPageShell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <>
      <Sidebar />
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
};
