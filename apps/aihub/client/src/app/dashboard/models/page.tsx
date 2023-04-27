'use client';

import { useSelectAllModels } from '@/modules/models/hooks/use-select-all-models';
import { useEffect } from 'react';

export default function Models() {
  const { selectAllModels } = useSelectAllModels();

  useEffect(() => {
    (async () => {
      const { data } = await selectAllModels();
      console.log(data);
    })();
  }, []);

  return <div></div>;
}
