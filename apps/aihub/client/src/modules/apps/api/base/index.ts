import type { AppsTableRow, Supabase } from '@/lib/supabase/types';

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
