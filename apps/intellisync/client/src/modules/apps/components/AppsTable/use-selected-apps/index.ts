import { useState } from 'react';

import { type AppsTableRow } from '@/lib/supabase/types';

type UseSelectedAppsProps = {
  apps: AppsTableRow[];
};

export function useSelectedApps({ apps }: UseSelectedAppsProps) {
  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  const checkRow = (modelId: string) => {
    setSelectedApps((value) => [...value, modelId]);
  };

  const uncheckRow = (modelId: string) => {
    setSelectedApps((value) => value.filter((model) => model !== modelId));
  };

  const rowIsChecked = (modelId: string) => selectedApps.includes(modelId);

  const checkAllRows = () => {
    const checkedRows = apps.map((model) => model.id);
    setSelectedApps(checkedRows);
  };

  const uncheckAllRows = () => setSelectedApps([]);

  return {
    checkRow,
    uncheckRow,
    rowIsChecked,
    checkAllRows,
    uncheckAllRows,
  };
}
