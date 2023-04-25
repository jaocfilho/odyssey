import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/supabase/types';

import { supabase as supabaseLib } from '@/lib/supabase';

export async function signInWithGithub(
  supabase: SupabaseClient<Database> = supabaseLib
) {
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
}

type SignInWithEmailParams = {
  email: string;
  password: string;
};

export async function signInWithEmail(
  { email, password }: SignInWithEmailParams,
  supabase: SupabaseClient<Database> = supabaseLib
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut(
  supabase: SupabaseClient<Database> = supabaseLib
) {
  return await supabase.auth.signOut();
}
