import { DatabaseTables, Supabase, TableInsert } from '../types';

export type BaseSelectByIdParams = {
  id: string;
};

export async function baseSelectById<T extends DatabaseTables>(
  { id }: BaseSelectByIdParams,
  table: T,
  supabase: Supabase
) {
  const response = await supabase
    .from(table)
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();

  return response;
}

export async function baseSelectAll<Table extends DatabaseTables>(
  table: Table,
  supabase: Supabase
) {
  return await supabase.from(table).select('*');
}

export type BaseDeleteByIdParams = {
  id: string;
};

export async function baseDeleteById<Table extends DatabaseTables>(
  { id }: BaseDeleteByIdParams,
  table: Table,
  supabase: Supabase
) {
  return await supabase.from(table).delete().eq('id', id);
}
