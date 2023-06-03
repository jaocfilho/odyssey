import { useSupabase } from '@/lib/supabase/Provider';
import { baseInsertApp, type BaseInsertAppParams } from '../../api/base';

export function useInsertApp() {
  const { supabase } = useSupabase();

  const insertApp = async ({
    name,
    model,
    description,
  }: BaseInsertAppParams) => {
    return await baseInsertApp({ name, model, description }, supabase);
  };

  return { insertApp };
}
