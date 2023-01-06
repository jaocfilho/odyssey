import type { ReactNode } from 'react';

import { AuthenticatedPageShell } from '../modules/pageShells';

type AuthenticatedLayoutProps = {
  children: ReactNode;
};

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return <AuthenticatedPageShell>{children}</AuthenticatedPageShell>;
}
