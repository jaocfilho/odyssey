import { Container } from './Container';
import { Item } from './Item';
import { AppsTableRow } from '@/lib/supabase/types';

type App = Pick<AppsTableRow, 'id' | 'name'>;

type AppsListProps = {
  apps: App[];
};

export function AppsList({ apps }: AppsListProps) {
  return (
    <Container>
      {apps
        ? apps.map(({ name, id }) => <Item key={id} name={name} id={id} />)
        : null}
    </Container>
  );
}
