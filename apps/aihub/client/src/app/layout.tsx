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
      <body className="bg-white text-slate-500">{children}</body>
    </html>
  );
}
