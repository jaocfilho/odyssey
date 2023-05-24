import { usePathname, useParams } from 'next/navigation';

import { isPersonasPath } from '../../urls';

export function useIsCurrentPersonaPath(personaId: string) {
  const pathname = usePathname();
  const params = useParams();

  const isPath = isPersonasPath(pathname);

  if (!isPath) return false;

  const { id } = params;
  return personaId === id;
}
