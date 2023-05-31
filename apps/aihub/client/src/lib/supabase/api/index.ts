import { DatabaseTables, Supabase, TableInsert } from '../types';

export type BaseSelectByIdParams = {
  table: DatabaseTables;
  id: string;
};

export async function baseSelectById(
  { table, id }: BaseSelectByIdParams,
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

export type BaseInsertParams<Table extends DatabaseTables> = {
  params: TableInsert<Table>;
};

export async function baseInsert<Table extends DatabaseTables>(
  { params }: BaseInsertParams<Table>,
  table: DatabaseTables,
  supabase: Supabase
) {
  return await supabase.from(table).insert(params).select().limit(1).single();
}
