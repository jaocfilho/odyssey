import type { Models, Supabase } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function findAllModels(supabase: Supabase = supabaseLib) {
  return await supabase.from('models').select('*');
}

type CreateModelParams = Models['Insert'];

export async function createModel(
  { name, context, vibe }: CreateModelParams,
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
