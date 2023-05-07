import { AppDetailsOverviewLink } from '@/modules/navigation/components/AppDetailsOverviewLink';
import { Container } from './Container';
import { NavItem } from './NavItem';
import { AppDetailsPromptLink } from '@/modules/navigation/components/AppDetailsPromptLink';

const secondaryNavigation = [
  {
    name: 'Overview',
    href: 'overview',
    Link: AppDetailsOverviewLink,
  },
  {
    name: 'Prompt',
    href: 'prompt',
    Link: AppDetailsPromptLink,
  },
];

type DetailsNavigationProps = {
  id: string;
};

export function DetailsNavigation({ id }: DetailsNavigationProps) {
  return (
    <Container>
      {secondaryNavigation.map(({ name, href, Link }) => (
        <Link key={name} id={id}>
          <NavItem name={name} href={href} />
        </Link>
      ))}
    </Container>
  );
}
