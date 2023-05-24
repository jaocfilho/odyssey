import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type PersonaDetailsOverviewLinkProps = {
  children: ReactNode;
  id: string;
};

export function PersonaDetailsOverviewLink({
  children,
  id,
}: PersonaDetailsOverviewLinkProps) {
  const url = urlPaths.personas.details.overview(id);

  return <Link href={url}>{children}</Link>;
}
