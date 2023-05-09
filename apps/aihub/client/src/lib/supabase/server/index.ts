import { headers, cookies } from 'next/headers';

import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '../types/database';

export function createServerSupabase() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  return supabase;
}
