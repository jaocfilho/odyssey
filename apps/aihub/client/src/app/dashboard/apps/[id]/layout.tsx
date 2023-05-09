import { ReactNode } from 'react';

import { serverSelectAppById } from '@/modules/apps/api/server';
import { DetailsNavigation } from '@/modules/apps/components/DetailsNavigation';

type AppDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default async function AppDetailsLayout({
  children,
  params,
}: AppDetailsLayoutProps) {
  const { id } = params;

  await serverSelectAppById({ id });

  return (
    <div>
      <DetailsNavigation id={id} />
      {children}
    </div>
  );
}
