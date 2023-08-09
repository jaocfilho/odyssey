import { type Supabase } from '@/lib/supabase/types';

export type BaseSelectMessageCreditsByOrganizationIdParams = {
  organizationId: string;
};

export async function baseSelectMessageCreditsByOrganizationId(
  { organizationId }: BaseSelectMessageCreditsByOrganizationIdParams,
  supabase: Supabase
) {
  return await supabase
    .from('organization_message_credits')
    .select('*')
    .eq('organization_id', organizationId)
    .limit(1)
    .single();
}
