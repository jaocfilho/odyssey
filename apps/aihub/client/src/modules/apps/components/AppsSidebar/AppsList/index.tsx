'use client';

import { useAllAppsQuery } from '@/modules/apps/hooks/use-all-apps-query';
import { Container } from './Container';
import { Item } from './Item';

const navigation = [
  {
    name: 'Dashboard',
    id: '6418c0a8-3462-462b-9bf3-a8bec6a7d25c',
  },
  { name: 'Team', id: '#' },
  { name: 'Projects', id: '#' },
  { name: 'Calendar', id: '#' },
  { name: 'Documents', id: '#' },
  { name: 'Reports', id: '#' },
];

export function AppsList() {
  const appsQuery = useAllAppsQuery();

  return (
    <Container>
      {appsQuery.data
        ? appsQuery.data.map(({ name, id }) => (
            <Item key={id} name={name!} id={id} />
          ))
        : null}
    </Container>
  );
}
