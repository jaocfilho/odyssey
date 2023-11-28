import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type ChatbotsDetailsDataSourceLinkProps = {
  children: ReactNode;
  id: string;
};

export function ChatbotsDetailsDataSourceLink({
  children,
  id,
}: ChatbotsDetailsDataSourceLinkProps) {
  const url = urlPaths.chatbots.details.dataSource(id);

  return <Link href={url}>{children}</Link>;
}
