import { createServerSupabase } from '@/lib/supabase/server';
import { baseSelectAllPersonas } from '../base';

export async function serverSelectAllPersonas() {
  const supabase = createServerSupabase();

  return await baseSelectAllPersonas(supabase);
}
