import { createClient } from '@supabase/supabase-js';

import { Database } from '../types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient<Database>(
  supabaseUrl,
  supabaseAdminKey
);
