import type { Models, Supabase } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function findAllModels(supabase: Supabase = supabaseLib) {
  return await supabase.from('models').select('*');
}

type CreateModelParams = Models['Insert'];

export async function createModel(supabase: Supabase = supabaseLib) {
  return await supabase.from('models').insert([
    {
      name: 'Biology assistant',
      context: 'Lorem Ipsum',
      vibe: 'Professional',
    },
  ]);
}
