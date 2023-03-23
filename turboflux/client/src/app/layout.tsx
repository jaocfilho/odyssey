import type { ReactNode } from 'react';

import './globals.css';

import { Inter } from 'next/font/google';

import RootProviders from './providers';

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} bg-slate-50 dark:bg-slate-900 h-full`}
    >
      <body className="h-full">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
