import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import { baseSelectAllPersonas } from '../../api/base';
import { personasQueryKeys } from '../../query-keys';

export function useBaseSelectAllPersonas() {
  const { supabase } = useSupabase();

  const selectAllPersonas = async () => {
    return await baseSelectAllPersonas(supabase);
  };

  return { selectAllPersonas };
}

export function useSelectAllPersonas() {
  const { selectAllPersonas } = useBaseSelectAllPersonas();

  const queryKey = personasQueryKeys.all();
  const queryFn = async () => {
    const { data } = await selectAllPersonas();
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
