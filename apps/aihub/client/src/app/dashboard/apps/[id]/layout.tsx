import { ReactNode } from 'react';

import { DetailsLayout } from '@/modules/apps/components/DetailsLayout';

type AppDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default function AppDetailsLayout({
  children,
  params,
}: AppDetailsLayoutProps) {
  const { id } = params;

  return <DetailsLayout id={id}>{children}</DetailsLayout>;
}
