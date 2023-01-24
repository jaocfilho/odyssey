'use client';

import type { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from 'next-themes';

import { darkTheme, lightTheme } from 'milky-ui';

import { globalStyles } from '../modules/theme';

type RootProvidersProps = {
  children: ReactNode;
};

export default function RootProviders({ children }: RootProvidersProps) {
  globalStyles();

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
