import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

import { darkTheme, lightTheme, globalStyles } from "milky-ui";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;