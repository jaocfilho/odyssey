import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseInsertPersona,
  type BaseInsertPersonaParams,
} from '../../api/base';
import { invalidateAllPersonasQuery } from '../../query-keys';

export function useBaseInsertPersona() {
  const { supabase } = useSupabase();

  const insertPersona = async (params: BaseInsertPersonaParams) => {
    return await baseInsertPersona(params, supabase);
  };

  return { insertPersona };
}

export function useInsertPersona() {
  const { insertPersona } = useBaseInsertPersona();

  return useMutation({
    mutationFn: insertPersona,
    onSuccess: () => {
      invalidateAllPersonasQuery();
    },
  });
}
