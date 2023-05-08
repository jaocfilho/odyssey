import type { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './database';

export type Supabase = SupabaseClient<Database>;

type AppsTable = Database['public']['Tables']['apps'];
export type AppsTableRow = AppsTable['Row'];
export type AppsTableInsert = AppsTable['Insert'];
