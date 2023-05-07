import type { Models, Supabase } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function selectAllApps(supabase: Supabase = supabaseLib) {
  return await supabase.from('models').select('*');
}

export type InsertAppParams = Models['Insert'];

export async function insertApp(
  { name, context, vibe }: InsertAppParams,
  supabase: Supabase = supabaseLib
) {
  return await supabase.from('models').insert([
    {
      name,
      context,
      vibe,
    },
  ]);
}
