'use client';

import { useAllModelsQuery } from '@/modules/models/hooks/use-all-models-query';

export default function Models() {
  const modelsQuery = useAllModelsQuery();

  console.log(modelsQuery.data);
  return <div></div>;
}
