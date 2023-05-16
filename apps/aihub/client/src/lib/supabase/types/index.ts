import type { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './database';

export type Supabase = SupabaseClient<Database>;

type AppsTable = Database['public']['Tables']['apps'];
export type AppsTableRow = AppsTable['Row'];
export type AppsTableInsert = AppsTable['Insert'];

type Gpt35RefinementsTable = Database['public']['Tables']['gpt35_refinements'];
export type Gpt35RefinementRow = Gpt35RefinementsTable['Row'];
export type Gpt35RefinementInsert = Gpt35RefinementsTable['Insert'];

export type DatabaseFunctions = Database['public']['Functions'];
