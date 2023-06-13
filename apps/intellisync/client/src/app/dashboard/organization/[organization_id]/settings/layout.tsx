import { type ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';

type SettingsLayoutProps = {
  children: ReactNode;
};

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <MultiSidebarLayout header="Settings" secondarySidebarContent={<div />}>
      {children}
    </MultiSidebarLayout>
  );
}
