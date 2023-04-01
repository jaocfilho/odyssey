import { ReactNode } from 'react';

type SidebarContainerProps = {
  children: ReactNode;
};

export const SidebarContainer = ({ children }: SidebarContainerProps) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 border-r dark:border-slate-700">
        {children}
      </div>
    </div>
  );
};
