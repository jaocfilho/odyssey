import { Supabase } from '@/lib/supabase/types';

export type BaseSelectApikeyByOrganizationIdParams = {
  organization_id: string;
};

export async function baseSelectApikeyByOrganizationId(
  { organization_id }: BaseSelectApikeyByOrganizationIdParams,
  supabase: Supabase
) {
  return await supabase
    .from('api_keys')
    .select('*')
    .eq('organization_id', organization_id)
    .limit(1)
    .single();
}
