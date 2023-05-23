import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseInsertPersona,
  type BaseInsertPersonaParams,
} from '../../api/base';

export function useInsertPersona() {
  const { supabase } = useSupabase();

  const insertPersona = async (params: BaseInsertPersonaParams) => {
    return await baseInsertPersona(params, supabase);
  };

  return { insertPersona };
}
