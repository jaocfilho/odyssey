import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type LoginLinkProps = {
  children: ReactNode;
  className?: string;
};

export function LoginLink({ children, className }: LoginLinkProps) {
  const url = urlPaths.auth.login;

  return (
    <Link className={className} href={url}>
      {children}
    </Link>
  );
}
