import { type ReactNode } from 'react';

import { MultiSidebarLayout } from '@/components/PageLayouts/MultiSidebarLayout';

type ChatbotsLayoutProps = {
  children: ReactNode;
};

export default async function ChatbotsLayout({
  children,
}: ChatbotsLayoutProps) {
  return (
    <MultiSidebarLayout header="Chatbots" secondarySidebarContent={<div></div>}>
      {children}
    </MultiSidebarLayout>
  );
}
