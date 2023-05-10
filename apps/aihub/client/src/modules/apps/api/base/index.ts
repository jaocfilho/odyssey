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
  const { data, ...rest } = await supabase
    .from('apps')
    .select('*')
    .eq('id', id);

  if (data) {
    const app = data[0];
    return { data: app, ...rest };
  }

  return { data, ...rest };
}

type BaseSelectAppByIdReturn = Awaited<ReturnType<typeof baseSelectAppById>>;
export type SelectAppByIdReturnData = BaseSelectAppByIdReturn['data'];

export async function baseSelectAllApps(supabase: Supabase) {
  return await supabase.from('apps').select('*');
}

export type BaseInsertAppParams = AppsTableInsert;

export async function baseInsertApp(
  { name, model, description }: BaseInsertAppParams,
  supabase: Supabase
) {
  const { data, ...rest } = await supabase
    .from('apps')
    .insert([
      {
        name,
        model,
        description,
      },
    ])
    .select();

  if (data) {
    const app = data[0];
    return { data: app, ...rest };
  }

  return { data, ...rest };
}
