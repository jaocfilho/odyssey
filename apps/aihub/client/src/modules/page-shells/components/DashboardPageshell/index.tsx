import { ReactNode } from 'react';

import { Sidebar } from './Sidebar';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const DashboardPageshell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <>
      <Sidebar />
      <main className="py-10 lg:pl-72">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-zinc-900">
          {children}
        </div>
      </main>
    </>
  );
};
