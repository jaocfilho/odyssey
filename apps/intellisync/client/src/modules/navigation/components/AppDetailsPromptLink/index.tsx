import { ReactNode } from 'react';

import Link from 'next/link';

import { appsUrls } from '@/modules/navigation/urls';

type AppDetailsPromptLinkProps = {
  children: ReactNode;
  id: string;
};

export function AppDetailsPromptLink({
  children,
  id,
}: AppDetailsPromptLinkProps) {
  const url = appsUrls.details.prompt(id);

  return <Link href={url}>{children}</Link>;
}
