import type { AppsTableInsert, Supabase } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function baseSelectAllApps(supabase: Supabase = supabaseLib) {
  return await supabase.from('apps').select('*');
}

export type InsertAppParams = AppsTableInsert;

export async function insertApp(
  { name, model, context, vibe }: InsertAppParams,
  supabase: Supabase = supabaseLib
) {
  return await supabase.from('apps').insert([
    {
      name,
      model,
      context,
      vibe,
    },
  ]);
}
