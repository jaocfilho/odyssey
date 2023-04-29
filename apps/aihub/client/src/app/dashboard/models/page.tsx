'use client';

import { ModelsTable } from '@/modules/models/components/ModelsTable';
import { useAllModelsQuery } from '@/modules/models/hooks/use-all-models-query';

export default function Models() {
  const modelsQuery = useAllModelsQuery();

  console.log(modelsQuery.data);
  return <ModelsTable />;
}
