import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type LoginLinkProps = {
  children: ReactNode;
};

export function LoginLink({ children }: LoginLinkProps) {
  const url = urlPaths.chatbots.base;

  return <Link href={url}>{children}</Link>;
}
