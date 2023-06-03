import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import { baseGetAppById, type BaseGetAppByIdParams } from '../../api/base';
import { appsQueryKeys } from '../../query-keys';

type GetAppByIdParams = BaseGetAppByIdParams;

export function useBaseGetAppById() {
  const { supabase } = useSupabase();

  const getAppById = async ({ id }: GetAppByIdParams) => {
    return await baseGetAppById({ id }, supabase);
  };

  return { getAppById };
}

type UseGetAppByIdProps = BaseGetAppByIdParams;

export function useGetAppById({ id }: UseGetAppByIdProps) {
  const { getAppById } = useBaseGetAppById();

  const queryKey = appsQueryKeys.app(id);
  const queryFn = async () => {
    const { data } = await getAppById({ id });
    return data;
  };

  return useQuery({ queryKey, queryFn });
}
