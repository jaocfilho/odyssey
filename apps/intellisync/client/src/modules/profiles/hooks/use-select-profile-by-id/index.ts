import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectProfileById,
  type BaseSelectProfileByIdParams,
} from '../../api/base';

export function useBaseSelectProfileById() {
  const { supabase } = useSupabase();

  const selectProfileById = async ({ id }: BaseSelectProfileByIdParams) => {
    return await baseSelectProfileById({ id }, supabase);
  };

  return { selectProfileById };
}
