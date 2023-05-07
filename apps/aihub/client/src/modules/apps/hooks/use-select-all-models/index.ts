import { useSupabase } from '@/lib/supabase/Provider';
import { selectAllApps as baseSelectAllModels } from '../../api';

export function useSelectAllModels() {
  const { supabase } = useSupabase();

  const selectAllModels = async () => {
    return await baseSelectAllModels(supabase);
  };

  return { selectAllModels };
}
