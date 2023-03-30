'use client';

import type { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';

type RootProvidersProps = {
  children: ReactNode;
};

export default function RootProviders({ children }: RootProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
