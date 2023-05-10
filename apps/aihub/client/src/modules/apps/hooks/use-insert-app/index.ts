import { useSupabase } from '@/lib/supabase/Provider';
import { insertApp as baseInsertApp, type InsertAppParams } from '../../api';

export function useInsertApp() {
  const { supabase } = useSupabase();

  const insertApp = async ({ name, model, description }: InsertAppParams) => {
    return await baseInsertApp({ name, model, description }, supabase);
  };

  return { insertApp };
}
