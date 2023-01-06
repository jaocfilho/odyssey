import type { ReactNode } from 'react';

import { UnauthenticatedPageshell } from '../modules/pageShells';

type UnauthenticatedLayoutProps = {
  children: ReactNode;
};

export default function UnauthenticatedLayout({
  children,
}: UnauthenticatedLayoutProps) {
  return <UnauthenticatedPageshell>{children}</UnauthenticatedPageshell>;
}
