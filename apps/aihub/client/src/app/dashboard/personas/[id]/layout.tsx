import { ReactNode } from 'react';

import { PersonaDetailsNavigation } from '@/modules/personas/components/PersonaDetailsNavigation';

type PersonaDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default function PersonaDetailsLayout({
  children,
  params,
}: PersonaDetailsLayoutProps) {
  const { id } = params;

  return (
    <div>
      <PersonaDetailsNavigation id={id} />
      {children}
    </div>
  );
}
