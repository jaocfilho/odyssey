import { ReactNode } from 'react';

type ChatbotsLayoutProps = {
  children: ReactNode;
};

export default async function ChatbotsLayout({
  children,
}: ChatbotsLayoutProps) {
  return <>{children}</>;
}
