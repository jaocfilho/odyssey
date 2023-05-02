import { ModelDetailsOverviewLink } from '@/modules/navigation/components/ModelDetailsOverviewLink';
import { Container } from './Container';
import { NavItem } from './NavItem';
import { ModelDetailsPromptLink } from '@/modules/navigation/components/ModelDetailsPromptLink';

const secondaryNavigation = [
  {
    name: 'Overview',
    href: 'overview',
    Link: ModelDetailsOverviewLink,
  },
  {
    name: 'Prompt',
    href: 'prompt',
    Link: ModelDetailsPromptLink,
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
