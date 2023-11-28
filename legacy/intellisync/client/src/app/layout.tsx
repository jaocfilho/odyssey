import type { ReactNode } from 'react';

import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import RootProviders from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'IntellisyncAI',
};

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} h-full dark`}>
      <body className="bg-white antialiased dark:bg-grayScheme-900 text-grayScheme-700 dark:text-white h-full">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
