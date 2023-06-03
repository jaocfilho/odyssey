import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectProfileById,
  type BaseSelectProfileByIdReturnData,
  type BaseSelectProfileByIdParams,
} from '../../api/base';
import { profilesQueryKeys } from '../../query-keys';

export function useBaseSelectProfileById() {
  const { supabase } = useSupabase();

  const selectProfileById = async ({ id }: BaseSelectProfileByIdParams) => {
    return await baseSelectProfileById({ id }, supabase);
  };

  return { selectProfileById };
}

type UseSelectProfileByIdParams = BaseSelectProfileByIdParams;

type UseSelectProfileByIdOptions = {
  initialData?: BaseSelectProfileByIdReturnData;
};

export function useSelectProfileById(
  { id }: UseSelectProfileByIdParams,
  options?: UseSelectProfileByIdOptions
) {
  const { selectProfileById } = useBaseSelectProfileById();

  const queryKey = profilesQueryKeys.profile(id);
  const queryFn = async () => {
    const { data } = await selectProfileById({ id });
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
