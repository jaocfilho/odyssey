import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectMessageCreditsByOrganizationId,
  type BaseSelectMessageCreditsByOrganizationIdParams,
} from '../../api/base';

export function useBaseSelectMessageCreditsByOrganizationId() {
  const { supabase } = useSupabase();

  const selectMessageCreditsByOrganizationId = async ({
    organizationId,
  }: BaseSelectMessageCreditsByOrganizationIdParams) => {
    return await baseSelectMessageCreditsByOrganizationId(
      { organizationId },
      supabase
    );
  };

  return { selectMessageCreditsByOrganizationId };
}
