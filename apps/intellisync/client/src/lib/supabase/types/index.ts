import type { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './database';

export type Supabase = SupabaseClient<Database>;

export type DatabaseTables = keyof Database['public']['Tables'];
export type TableInsert<Table extends DatabaseTables> =
  Database['public']['Tables'][Table]['Insert'];
export type TableRow<Table extends DatabaseTables> =
  Database['public']['Tables'][Table]['Row'];

export type DatabaseEnums = Database['public']['Enums'];

type AppsTable = Database['public']['Tables']['apps'];
export type AppsTableRow = AppsTable['Row'];
export type AppsTableInsert = AppsTable['Insert'];

type ChatbotsTable = Database['public']['Tables']['chatbots'];
export type ChatbotsRow = ChatbotsTable['Row'];
export type ChatbotsInsert = ChatbotsTable['Insert'];

type ChatbotsSettingsTable = Database['public']['Tables']['chatbots_settings'];
export type ChatbotsSettingsRow = ChatbotsSettingsTable['Row'];
export type ChatbotsSettingsInsert = ChatbotsSettingsTable['Insert'];

type Gpt35RefinementsTable = Database['public']['Tables']['gpt35_refinements'];
export type Gpt35RefinementRow = Gpt35RefinementsTable['Row'];
export type Gpt35RefinementInsert = Gpt35RefinementsTable['Insert'];

type PersonasTable = Database['public']['Tables']['personas'];
export type PersonasRow = PersonasTable['Row'];
export type PersonasInsert = PersonasTable['Insert'];

export type DatabaseFunctions = Database['public']['Functions'];
