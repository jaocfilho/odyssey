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

export type BaseInsertParams<Table extends DatabaseTables> = TableInsert<Table>;

export async function baseInsert<Table extends DatabaseTables>(
  params: BaseInsertParams<Table>,
  table: DatabaseTables,
  supabase: Supabase
) {
  return await supabase.from(table).insert(params).select().limit(1).single();
}

export async function baseSelectAll<Table extends DatabaseTables>(
  table: Table,
  supabase: Supabase
) {
  return await supabase.from(table).select('*');
}
