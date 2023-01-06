import type { ReactNode } from 'react';

import { Roboto_Flex } from '@next/font/google';

import { globalStyles } from 'milky-ui';

import RootProviders from './providers';

type RootLayoutProps = {
  children: ReactNode;
};

const roboto = Roboto_Flex({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  globalStyles();

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
