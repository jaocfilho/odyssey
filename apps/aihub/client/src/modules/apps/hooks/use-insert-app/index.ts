import { useSupabase } from '@/lib/supabase/Provider';
import { insertApp as baseInsertApp, type InsertAppParams } from '../../api';

export function useInsertApp() {
  const { supabase } = useSupabase();

  const insertApp = async ({ name, model, context, vibe }: InsertAppParams) => {
    console.log({ name, model, context, vibe });
    return await baseInsertApp({ name, model, context, vibe }, supabase);
  };

  return { insertApp };
}
