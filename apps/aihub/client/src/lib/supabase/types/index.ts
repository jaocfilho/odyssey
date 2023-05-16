import type { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './database';

export type Supabase = SupabaseClient<Database>;

type AppsTable = Database['public']['Tables']['apps'];
export type AppsTableRow = AppsTable['Row'];
export type AppsTableInsert = AppsTable['Insert'];

type Gpt35RefinementTable = Database['public']['Tables']['gpt3_5_refinement'];

export type Gpt35RefinementRow = Gpt35RefinementTable['Row'];
export type Gpt35RefinementInsert = Gpt35RefinementTable['Insert'];

export type DatabaseFunctions = Database['public']['Functions'];
