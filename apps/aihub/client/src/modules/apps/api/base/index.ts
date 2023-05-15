import type {
  AppsTableRow,
  AppsTableInsert,
  Supabase,
} from '@/lib/supabase/types';

export type BaseSelectAppByIdParams = Pick<AppsTableRow, 'id'>;

export async function baseSelectAppById(
  { id }: BaseSelectAppByIdParams,
  supabase: Supabase
) {
  const response = await supabase
    .from('apps')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();

  return response;
}

type BaseSelectAppByIdReturn = Awaited<ReturnType<typeof baseSelectAppById>>;
export type SelectAppByIdReturnData = BaseSelectAppByIdReturn['data'];

export async function baseSelectAllApps(supabase: Supabase) {
  return await supabase.from('apps').select('*');
}

export type BaseInsertAppParams = Pick<
  AppsTableInsert,
  'name' | 'model' | 'description'
>;

export async function baseInsertApp(
  { name, model, description }: BaseInsertAppParams,
  supabase: Supabase
) {
  const response = await supabase
    .from('apps')
    .insert([
      {
        name,
        model,
        description,
      },
    ])
    .select()
    .limit(1)
    .single();

  return response;
}

export type InsertAppReturn = Awaited<ReturnType<typeof baseInsertApp>>;
