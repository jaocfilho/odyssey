import { baseSelectById } from '@/lib/supabase/api';
import { Supabase } from '@/lib/supabase/types';

export type BaseSelectProfileByIdParams = {
  id: string;
};

export async function baseSelectProfileById(
  { id }: BaseSelectProfileByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id }, 'profiles', supabase);
}

export type BaseSelectProfileByIdReturnData = Awaited<
  ReturnType<typeof baseSelectProfileById>
>['data'];
