import { type ReactNode } from 'react';

type SecondarySidebarSectionTitleProps = {
  children: ReactNode;
};

export function SecondarySidebarSectionTitle({
  children,
}: SecondarySidebarSectionTitleProps) {
  return (
    <p className="text-sm font-medium leading-6 text-grayScheme-500">
      {children}
    </p>
  );
}
