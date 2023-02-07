import { ReactNode } from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import { darkTheme, lightTheme } from 'milky-ui';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </NextThemeProvider>
  );
};
