import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type ChatbotsDetailsOverviewLinkProps = {
  children: ReactNode;
  id: string;
};

export function ChatbotsDetailsOverviewLink({
  children,
  id,
}: ChatbotsDetailsOverviewLinkProps) {
  const url = urlPaths.chatbots.details.overview(id);

  return <Link href={url}>{children}</Link>;
}
