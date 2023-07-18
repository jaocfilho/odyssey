import { Supabase } from '@/lib/supabase/types';

type BaseSelectMessageCreditsByOrganizationIdParams = {
  organizationId: string;
};

export async function baseSelectMessageCreditsByOrganizationId(
  { organizationId }: BaseSelectMessageCreditsByOrganizationIdParams,
  supabase: Supabase
) {
  return await supabase
    .from('organization_message_credits')
    .select('*')
    .eq('organization_id', organizationId);
}
