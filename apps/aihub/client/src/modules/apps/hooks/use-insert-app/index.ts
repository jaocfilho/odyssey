import { useSupabase } from '@/lib/supabase/Provider';
import { insertApp as baseInsertApp, type InsertAppParams } from '../../api';

export function useInsertApp() {
  const { supabase } = useSupabase();

  const insertApp = async ({ name, context, vibe }: InsertAppParams) => {
    return await baseInsertApp({ name, context, vibe }, supabase);
  };

  return { insertApp };
}
