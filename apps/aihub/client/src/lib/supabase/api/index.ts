import { DatabaseTables, Supabase } from '../types';

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
