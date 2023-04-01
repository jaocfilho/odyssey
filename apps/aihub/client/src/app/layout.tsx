import type { ReactNode } from 'react';

import './globals.css';

import { Inter } from 'next/font/google';

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
      <body className="bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
