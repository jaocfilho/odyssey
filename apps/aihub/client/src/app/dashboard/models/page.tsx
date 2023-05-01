'use client';

import { ModelsTable } from '@/modules/models/components/ModelsTable';
import { useAllModelsQuery } from '@/modules/models/hooks/use-all-models-query';

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

export default function Models() {
  // const modelsQuery = useAllModelsQuery();

  return <ModelsTable models={models} />;
}
