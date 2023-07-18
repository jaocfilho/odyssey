import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectMessageCreditsByOrganizationId,
  type BaseSelectMessageCreditsByOrganizationIdParams,
} from '../../api/base';
import { organizationsQueryKeys } from '@/modules/organizations/query-keys';

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

type UseSelectMessageCreditsByOrganizationIdOptions = {
  enabled?: boolean;
};

export function useSelectMessageCreditsByOrganizationId(
  { organizationId }: BaseSelectMessageCreditsByOrganizationIdParams,
  options?: UseSelectMessageCreditsByOrganizationIdOptions
) {
  const { selectMessageCreditsByOrganizationId } =
    useBaseSelectMessageCreditsByOrganizationId();

  const queryKey = organizationsQueryKeys.messageCredits(organizationId);
  const queryFn = async () => {
    const { data } = await selectMessageCreditsByOrganizationId({
      organizationId,
    });
    return data;
  };

  return useQuery({ queryKey, queryFn, enabled: options?.enabled });
}
