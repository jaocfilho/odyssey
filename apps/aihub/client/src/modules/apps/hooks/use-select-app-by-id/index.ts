import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectAppById,
  type BaseSelectAppByIdParams,
  type SelectAppByIdReturnData,
} from '../../api/base';
import { appsQueryKeys } from '../../query-keys';

function useBaseSelectAppById() {
  const { supabase } = useSupabase();

  const selectAppById = async ({ id }: BaseSelectAppByIdParams) => {
    return await baseSelectAppById({ id }, supabase);
  };

  return { selectAppById };
}

type UseSelectAppByIdProps = BaseSelectAppByIdParams;
type UseSelectAppByIdOptions = {
  initialData: SelectAppByIdReturnData;
};

export function useSelectAppById(
  { id }: UseSelectAppByIdProps,
  options?: UseSelectAppByIdOptions
) {
  const { selectAppById } = useBaseSelectAppById();

  const queryKey = appsQueryKeys.app(id);
  const queryFn = async () => {
    const { data } = await selectAppById({ id });
    return data;
  };

  return useQuery({ queryKey, queryFn, ...options });
}
