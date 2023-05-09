'use client';

import { AppsTable } from '@/modules/apps/components/AppsTable';
import { RedirectToCreateApp } from '@/modules/apps/components/RedirectToCreateApp';
import { useAllAppsQuery } from '@/modules/apps/hooks/use-all-apps-query';

const models = [
  {
    id: '123',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
    created_at: null,
  },
  {
    id: '1234',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
    created_at: null,
  },
  {
    id: '12345',
    name: 'French Translator',
    vibe: 'Funny',
    context: 'You are a helpful assistant...',
    created_at: null,
  },
];

export default function Apps() {
  const appsQuery = useAllAppsQuery();

  return (
    <div className="flex flex-col m-4 gap-4">
      <div className="flex flex-row-reverse">
        <RedirectToCreateApp />
      </div>
      {appsQuery.data ? <AppsTable apps={appsQuery.data} /> : null}
    </div>
  );
}
