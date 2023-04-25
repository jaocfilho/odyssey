import { supabase } from '@/lib/supabase';

export async function signIn() {
  return await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
}
