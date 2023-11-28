import { cookies } from 'next/headers';

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '../types/database';

export function createRouteHandlerSupabase() {
  const supabase = createRouteHandlerClient<Database>({
    cookies,
  });

  return supabase;
}
