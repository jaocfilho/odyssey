import { supabase } from '@/lib/supabase';

export async function findAllModels() {
  return await supabase.from('models').select('*');
}

export async function createModel() {
  return await supabase.from('models').insert([
    {
      name: 'Biology assistant',
      context: 'Lorem Ipsum',
      vibe: 'Professional',
    },
  ]);
}
