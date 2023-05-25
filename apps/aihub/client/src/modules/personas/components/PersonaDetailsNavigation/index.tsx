import { urlPaths } from '@/modules/navigation/urls';
import { HeaderNavigation } from '@/components/HeaderNavigation';

type PersonaDetailsNavigationProps = {
  id: string;
};

export function PersonaDetailsNavigation({
  id,
}: PersonaDetailsNavigationProps) {
  const personasDetailsNavigation = [
    { href: urlPaths.personas.details.overview(id), name: 'Overview' },
    { href: urlPaths.personas.details.settings(id), name: 'Settings' },
  ];

  return <HeaderNavigation headerNavigationItems={personasDetailsNavigation} />;
}
