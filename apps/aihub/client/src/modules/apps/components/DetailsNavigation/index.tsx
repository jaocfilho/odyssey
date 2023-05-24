import { urlPaths } from '@/modules/navigation/urls';
import { HeaderNavigation } from '@/components/HeaderNavigation';

type DetailsNavigationProps = {
  id: string;
};

export function DetailsNavigation({ id }: DetailsNavigationProps) {
  const appDetailsNavigation = [
    { href: urlPaths.apps.details.overview(id), name: 'Overview' },
    { href: urlPaths.apps.details.refinement(id), name: 'Refinement' },
    { href: urlPaths.apps.details.prompt(id), name: 'Prompt' },
  ];

  return <HeaderNavigation headerNavigationItems={appDetailsNavigation} />;
}
