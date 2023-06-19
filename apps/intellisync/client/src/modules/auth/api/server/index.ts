import { createServerSupabase } from '@/lib/supabase/server';
import { baseGetSessionUser } from '..';

export async function serverGetSessionUser() {
  const supabase = createServerSupabase();

  return await baseGetSessionUser(supabase);
}
