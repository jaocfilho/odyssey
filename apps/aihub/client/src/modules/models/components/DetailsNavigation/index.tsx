import { Container } from './Container';
import { NavItem } from './NavItem';

const secondaryNavigation = [
  { name: 'Overview', href: '#', current: true },
  { name: 'Activity', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Collaborators', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
];

type DetailsNavigationProps = {
  id: string;
};

export function DetailsNavigation({ id }: DetailsNavigationProps) {
  return (
    <Container>
      {secondaryNavigation.map(({ name, href, current }) => (
        <NavItem key={name} name={name} href={href} current={current} />
      ))}
    </Container>
  );
}
