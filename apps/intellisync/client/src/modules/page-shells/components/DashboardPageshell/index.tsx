import { ReactNode } from 'react';

import { Sidebar } from '@/components/Sidebar';
import { MainContainer } from './MainContainer';
import { BreadCrumb } from '@/components/BreadCrumb';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const DashboardPageshell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <div>
      <Sidebar />
      <MainContainer>
        <div className="border-b px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:border-zinc-50/10">
          <div className="min-w-0 flex-1">
            <BreadCrumb />
          </div>
        </div>

        <div>{children}</div>
      </MainContainer>
    </div>
  );
};
