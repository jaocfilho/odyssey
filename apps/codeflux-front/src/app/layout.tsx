import type { ReactNode } from 'react';

import { globalStyles } from 'milky-ui';

import RootProviders from './providers';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  globalStyles();

  return (
    <html lang="en">
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
