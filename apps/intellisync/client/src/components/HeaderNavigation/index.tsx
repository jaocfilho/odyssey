import { Container } from './Container';
import {
  HeaderNavigationItem,
  HeaderNavigationItemProps,
} from './HeaderNavigationItem';

type HeaderNavigationProps = {
  headerNavigationItems: HeaderNavigationItemProps[];
};

export function HeaderNavigation({
  headerNavigationItems,
}: HeaderNavigationProps) {
  return (
    <Container>
      {headerNavigationItems.map(({ href, name }) => (
        <HeaderNavigationItem key={href} href={href} name={name} />
      ))}
    </Container>
  );
}
