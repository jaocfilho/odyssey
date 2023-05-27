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
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased h-full bg-white text-zinc-700 dark:bg-gray-900 dark:text-white">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
