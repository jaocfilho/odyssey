import { ReactNode } from 'react';

import { PersonaDetailsNavigation } from '@/modules/personas/components/PersonaDetailsNavigation';
import { serverSelectPersonaById } from '@/modules/personas/api/server';

type PersonaDetailsLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default async function PersonaDetailsLayout({
  children,
  params,
}: PersonaDetailsLayoutProps) {
  const { id } = params;

  const { data } = await serverSelectPersonaById({ id });

  return (
    <div>
      <PersonaDetailsNavigation id={id} />
      {children}
    </div>
  );
}
