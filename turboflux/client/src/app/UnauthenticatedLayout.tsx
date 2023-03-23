import type { ReactNode } from 'react';

type UnauthenticatedLayoutProps = {
  children: ReactNode;
};

export default function UnauthenticatedLayout({
  children,
}: UnauthenticatedLayoutProps) {
  return <div>{children}</div>;
}
