import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectChatbotSettingsById,
  type BaseSelectChatbotSettingsByIdParams,
  type BaseSelectChatbotSettingsByIdReturnData,
} from '../../api/base';
import { chatbotsQueryKeys } from '../../query-keys';

export function useBaseSelectChatbotSettingsById() {
  const { supabase } = useSupabase();

  const selectChatbotSettingsById = async ({
    id,
  }: BaseSelectChatbotSettingsByIdParams) => {
    return await baseSelectChatbotSettingsById({ id }, supabase);
  };

  return { selectChatbotSettingsById };
}

type UseSelectChatbotSettingsByIdParams = BaseSelectChatbotSettingsByIdParams;

type UseSelectChatbotSettingsByIdOptions = {
  initialData?: BaseSelectChatbotSettingsByIdReturnData;
};

export function useSelectChatbotSettingsById(
  { id }: UseSelectChatbotSettingsByIdParams,
  options?: UseSelectChatbotSettingsByIdOptions
) {
  const { selectChatbotSettingsById } = useBaseSelectChatbotSettingsById();

  const queryKey = chatbotsQueryKeys.settings(id);
  const queryFn = async () => {
    const { data } = await selectChatbotSettingsById({ id });
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
