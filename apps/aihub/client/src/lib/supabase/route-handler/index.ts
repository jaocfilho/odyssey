import { headers, cookies } from 'next/headers';

import { createRouteHandlerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '../types/database';

export function createRouteHandlerSupabase() {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });

  return supabase;
}
