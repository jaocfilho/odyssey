import { ReactNode } from 'react';

import { serverSelectAppById } from '@/modules/apps/api/server';
import { DetailsNavigation } from '@/modules/apps/components/DetailsNavigation';
import { DetailsHeader } from '@/modules/apps/components/DetailsHeader';

type AppDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default async function AppDetailsLayout({
  children,
  params,
}: AppDetailsLayoutProps) {
  const { id } = params;

  const { data } = await serverSelectAppById({ id });

  return (
    <div>
      <DetailsNavigation id={id} />
      <DetailsHeader name={data?.name!} />
      {children}
    </div>
  );
}
