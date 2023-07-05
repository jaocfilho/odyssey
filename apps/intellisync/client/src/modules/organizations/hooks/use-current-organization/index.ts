import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectOrganizationById,
  type BaseSelectOrganizationByIdParams,
  type BaseSelectOrganizationByIdReturnData,
} from '../../api/base';
import { currentOrganizationQueryKey } from '../../query-keys';
import { useProfile } from '@/modules/profiles/hooks/use-profile';

export function useBaseSelectOrganizationById() {
  const { supabase } = useSupabase();

  const selectOrganizationById = async ({
    id,
  }: BaseSelectOrganizationByIdParams) => {
    return await baseSelectOrganizationById({ id }, supabase);
  };

  return { selectOrganizationById };
}

export type UseSelectOrganizationByIdOptions = {
  initialData?: BaseSelectOrganizationByIdReturnData;
};

export function useCurrentOrganization(
  options?: UseSelectOrganizationByIdOptions
) {
  const profileQuery = useProfile();

  const { selectOrganizationById } = useBaseSelectOrganizationById();

  const queryKey = currentOrganizationQueryKey();
  const queryFn = async () => {
    const id = profileQuery.data?.last_used_organization!;

    const { data } = await selectOrganizationById({ id });
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
