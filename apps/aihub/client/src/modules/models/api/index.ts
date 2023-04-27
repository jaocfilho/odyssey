import type { Models, Supabase } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function selectAllModels(supabase: Supabase = supabaseLib) {
  return await supabase.from('models').select('*');
}

export type InsertModelParams = Models['Insert'];

export async function insertModel(
  { name, context, vibe }: InsertModelParams,
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
