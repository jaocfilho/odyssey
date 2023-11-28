import { ReactNode } from 'react';

import Link from 'next/link';

import { urlPaths } from '@/modules/navigation/urls';

type RegisterLinkProps = {
  children: ReactNode;
  className?: string;
};

export function RegisterLink({ children, className }: RegisterLinkProps) {
  const url = urlPaths.auth.register;

  return (
    <Link className={className} href={url}>
      {children}
    </Link>
  );
}
