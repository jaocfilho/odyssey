import type { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './database';

export type Supabase = SupabaseClient<Database>;

export type DatabaseTables = keyof Database['public']['Tables'];

export type TableInsert<Table extends DatabaseTables> =
  Database['public']['Tables'][Table]['Insert'];

export type TableRow<Table extends DatabaseTables> =
  Database['public']['Tables'][Table]['Row'];

export type TableUpdate<Table extends DatabaseTables> =
  Database['public']['Tables'][Table]['Update'];

export type DatabaseEnums = Database['public']['Enums'];

export type DatabaseFunctions = Database['public']['Functions'];
