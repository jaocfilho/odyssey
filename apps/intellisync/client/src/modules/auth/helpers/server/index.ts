import { createServerSupabase } from '@/lib/supabase/server';

export async function serverGetSession() {
  const supabase = createServerSupabase();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { session };
}
