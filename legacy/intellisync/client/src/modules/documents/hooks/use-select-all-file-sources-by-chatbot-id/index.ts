import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseSelectAllFileSourcesByChatbotId,
  type BaseSelectFileSourcesByChatbotIdParams,
} from '../../api/base';
import { type ChatbotsFilesSourcesRow } from '../../entities';
import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';

export function useBaseSelectAllFileSourcesByChatbotId() {
  const { supabase } = useSupabase();

  const selectAllFileSourcesByChatbotId = async ({
    chatbot_id,
  }: BaseSelectFileSourcesByChatbotIdParams) => {
    return await baseSelectAllFileSourcesByChatbotId({ chatbot_id }, supabase);
  };

  return { selectAllFileSourcesByChatbotId };
}

type UseSelectAllFileSourcesByChatbotIdOptions = {
  initialData?: ChatbotsFilesSourcesRow[];
};

export function useSelectAllFileSourcesByChatbotId(
  { chatbot_id }: BaseSelectFileSourcesByChatbotIdParams,
  options?: UseSelectAllFileSourcesByChatbotIdOptions
) {
  const { selectAllFileSourcesByChatbotId } =
    useBaseSelectAllFileSourcesByChatbotId();

  const queryKey = chatbotsQueryKeys.fileSources(chatbot_id);
  const queryFn = async () => {
    const { data } = await selectAllFileSourcesByChatbotId({ chatbot_id });
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
