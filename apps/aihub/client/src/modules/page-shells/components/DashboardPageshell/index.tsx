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
            <h1 className="text-lg font-medium leading-6 sm:truncate">Home</h1>
          </div>
          <div className="mt-4 flex sm:ml-4 sm:mt-0">
            <Link href="/dashboard/create-model">
              <button
                type="button"
                className="order-0 inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:order-1 sm:ml-3"
              >
                Create
              </button>
            </Link>
          </div>
        </div>

        <div>{children}</div>
      </MainContainer>
    </>
  );
};
