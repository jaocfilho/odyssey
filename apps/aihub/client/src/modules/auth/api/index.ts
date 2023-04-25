import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function signIn(supabase: SupabaseClient<Database> = supabaseLib) {
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
}

export async function signOut(
  supabase: SupabaseClient<Database> = supabaseLib
) {
  return await supabase.auth.signOut();
}
