import { useState } from 'react';

import { type Model } from '@/lib/supabase/types';

type UseSelectedModelsProps = {
  models: Model[];
};

export function useSelectedModels({ models }: UseSelectedModelsProps) {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const checkRow = (modelId: string) => {
    setSelectedModels((value) => [...value, modelId]);
  };

  const uncheckRow = (modelId: string) => {
    setSelectedModels((value) => value.filter((model) => model !== modelId));
  };

  const rowIsChecked = (modelId: string) => selectedModels.includes(modelId);

  const checkAllRows = () => {
    const checkedRows = models.map((model) => model.id);
    setSelectedModels(checkedRows);
  };

  const uncheckAllRows = () => setSelectedModels([]);

  return {
    checkRow,
    uncheckRow,
    rowIsChecked,
    checkAllRows,
    uncheckAllRows,
  };
}
