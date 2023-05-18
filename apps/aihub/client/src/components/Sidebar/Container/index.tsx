import { ReactNode } from 'react';

type SidebarContainerProps = {
  children: ReactNode;
};

export const SidebarContainer = ({ children }: SidebarContainerProps) => {
  return (
    <div className="hidden px-2 lg:fixed lg:inset-y-0 lg:flex lg:bg-gray-100 lg:w-14 lg:flex-col lg:border-r lg:border-gray-200 lg:pb-4 lg:pt-5 lg:dark:border-zinc-50/10 lg:dark:bg-zinc-950">
      {children}
    </div>
  );
};
