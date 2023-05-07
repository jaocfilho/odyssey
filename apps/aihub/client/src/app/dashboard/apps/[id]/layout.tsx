import { ReactNode } from 'react';

import { DetailsNavigation } from '@/modules/apps/components/DetailsNavigation';

type ModelDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default function ModelDetailsLayout({
  children,
  params,
}: ModelDetailsLayoutProps) {
  const { id } = params;

  return (
    <div>
      <DetailsNavigation id={id} />
      {children}
    </div>
  );
}
