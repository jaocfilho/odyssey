import { baseSelectById } from '@/lib/supabase/api';
import { Supabase } from '@/lib/supabase/types';

export type BaseSelectOrganizationByIdParams = {
  id: string;
};

export async function baseSelectOrganizationById(
  { id }: BaseSelectOrganizationByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id }, 'organizations', supabase);
}
