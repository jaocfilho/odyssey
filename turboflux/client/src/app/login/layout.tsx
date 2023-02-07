import type { ReactNode } from 'react';

import UnauthenticatedLayout from '../UnauthenticatedLayout';

type LoginLayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return <UnauthenticatedLayout>{children}</UnauthenticatedLayout>;
}
