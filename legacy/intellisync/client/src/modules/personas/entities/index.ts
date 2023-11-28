import { TableRow, TableUpdate } from '@/lib/supabase/types';

export type PersonasRow = TableRow<'personas'>;

type BasePersonasUpdate = TableUpdate<'personas'>;
export type PersonasUpdate = Omit<
  BasePersonasUpdate,
  'updated_at' | 'created_at'
>;

export type PersonaOptions = Omit<
  PersonasRow,
  'id' | 'created_at' | 'updated_at' | 'chatbot_id' | 'context'
>;
