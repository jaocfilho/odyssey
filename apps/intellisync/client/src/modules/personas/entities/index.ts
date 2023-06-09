import { TableRow, TableUpdate } from '@/lib/supabase/types';

export type PersonasRow = TableRow<'personas'>;

type BasePersonasUpdate = TableUpdate<'personas'>;
export type PersonasUpdate = Omit<
  BasePersonasUpdate,
  'updated_at' | 'created_at'
>;
