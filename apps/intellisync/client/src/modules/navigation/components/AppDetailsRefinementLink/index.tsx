import { ReactNode } from 'react';

import Link from 'next/link';

import { appsUrls } from '@/modules/navigation/urls';

type AppDetailsRefinementLinkProps = {
  children: ReactNode;
  id: string;
};

export function AppDetailsRefinementLink({
  children,
  id,
}: AppDetailsRefinementLinkProps) {
  const url = appsUrls.details.refinement(id);

  return <Link href={url}>{children}</Link>;
}
