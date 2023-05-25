import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectAllPersonas,
  type BaseSelectAllPersonasReturnData,
} from '../../api/base';
import { personasQueryKeys } from '../../query-keys';

export function useBaseSelectAllPersonas() {
  const { supabase } = useSupabase();

  const selectAllPersonas = async () => {
    return await baseSelectAllPersonas(supabase);
  };

  return { selectAllPersonas };
}

type UseSelectAllPersonasProps = {
  initialData?: BaseSelectAllPersonasReturnData;
};

export function useSelectAllPersonas(options?: UseSelectAllPersonasProps) {
  const { selectAllPersonas } = useBaseSelectAllPersonas();

  const queryKey = personasQueryKeys.all();
  const queryFn = async () => {
    const { data } = await selectAllPersonas();
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
