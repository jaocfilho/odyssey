import { type ReactNode } from 'react';

type SecondarySidebarSectionProps = {
  children: ReactNode;
};

export function SecondarySidebarSection({
  children,
}: SecondarySidebarSectionProps) {
  return (
    <div className="flex w-full items-center px-4 h-12 border-b dark:border-zinc-50/10">
      {children}
    </div>
  );
}
