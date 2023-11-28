import { type Supabase } from '@/lib/supabase/types';

export type BaseSelectStorageTokensByOrganizationIdParams = {
  organizationId: string;
};

export async function baseSelectStorageTokensByOrganizationId(
  { organizationId }: BaseSelectStorageTokensByOrganizationIdParams,
  supabase: Supabase
) {
  return await supabase
    .from('organization_storage_tokens')
    .select('*')
    .eq('organization_id', organizationId)
    .limit(1)
    .single();
}
