import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectOrganizationById,
  type BaseSelectOrganizationByIdParams,
} from '../../api/base';
import { organizationQueryKey } from '../../query-keys';

export function useBaseSelectOrganizationById() {
  const { supabase } = useSupabase();

  const selectOrganizationById = async ({
    id,
  }: BaseSelectOrganizationByIdParams) => {
    return await baseSelectOrganizationById({ id }, supabase);
  };

  return { selectOrganizationById };
}

type UseSelectOrganizationByIdOptions = {
  enabled?: boolean;
};

export function useSelectOrganizationById(
  { id }: BaseSelectOrganizationByIdParams,
  options?: UseSelectOrganizationByIdOptions
) {
  const { selectOrganizationById } = useBaseSelectOrganizationById();

  const queryKey = organizationQueryKey(id);
  const queryFn = async () => {
    const { data } = await selectOrganizationById({ id });
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    enabled: options?.enabled,
  });
}
