import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type ChatbotsLinkProps = {
  children: ReactNode;
};

export function ChatbotsLink({ children }: ChatbotsLinkProps) {
  const url = urlPaths.chatbots.base;

  return <Link href={url}>{children}</Link>;
}
