import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectAllApps } from '../../api';
import { appsQueryKeys } from '../../query-keys';

function useBaseSelectAllApps() {
  const { supabase } = useSupabase();

  const selectAllApps = async () => {
    return await baseSelectAllApps(supabase);
  };

  return { selectAllApps };
}

export function useSelectAllApps() {
  const { selectAllApps } = useBaseSelectAllApps();

  const queryKey = appsQueryKeys.all();
  const queryFn = async () => {
    const { data } = await selectAllApps();
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
