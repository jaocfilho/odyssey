'use client';

import type { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';

import { globalStyles, ThemeProvider } from '../modules/theme';

type RootProvidersProps = {
  children: ReactNode;
};

export default function RootProviders({ children }: RootProvidersProps) {
  globalStyles();

  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
}
