import { type ReactNode } from 'react';

import { SimpleLayout } from '@/components/PageLayouts/SimpleLayout';

type ChatbotsLayoutProps = {
  children: ReactNode;
};

export default async function ChatbotsLayout({
  children,
}: ChatbotsLayoutProps) {
  return <SimpleLayout>{children}</SimpleLayout>;
}
