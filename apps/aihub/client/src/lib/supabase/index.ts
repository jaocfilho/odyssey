import { createClient } from '@supabase/supabase-js';

import { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_API_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
