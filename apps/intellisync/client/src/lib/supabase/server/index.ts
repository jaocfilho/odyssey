import { cookies } from 'next/headers';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '../types/database';

export function createServerSupabase() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  return supabase;
}
