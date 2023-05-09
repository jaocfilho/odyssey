import { Container } from './Container';
import { NavItem } from './NavItem';
import { appDetailsNavigation } from './config';

type DetailsNavigationProps = {
  id: string;
};

export function DetailsNavigation({ id }: DetailsNavigationProps) {
  return (
    <Container>
      {appDetailsNavigation.map(({ name, href, Link }) => (
        <Link key={name} id={id}>
          <NavItem name={name} href={href} />
        </Link>
      ))}
    </Container>
  );
}
