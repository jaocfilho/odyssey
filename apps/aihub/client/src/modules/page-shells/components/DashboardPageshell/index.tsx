import { ReactNode } from 'react';

import Link from 'next/link';

import { Sidebar } from './Sidebar';
import { MainContainer } from './MainContainer';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const DashboardPageshell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <div className="border-b px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:border-zinc-50/10">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-medium leading-6 dark:text-zinc-200 sm:truncate">
              Home
            </h1>
          </div>
        </div>

        <div>{children}</div>
      </MainContainer>
    </>
  );
};
