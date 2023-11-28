import { useQuery } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  type BaseSelectPersonaByChatbotParams,
  baseSelectPersonaByChatbot,
} from '../../api/base';
import { chatbotsQueryKeys } from '@/modules/chatbots/query-keys';
import { type PersonasRow } from '../../entities';

export function useBaseSelectPersonaByChatbot() {
  const { supabase } = useSupabase();

  const selectPersonaByChatbot = async ({
    chatbot_id,
  }: BaseSelectPersonaByChatbotParams) => {
    return await baseSelectPersonaByChatbot({ chatbot_id }, supabase);
  };

  return { selectPersonaByChatbot };
}

type UseSelectPersonaByChatbotProps = BaseSelectPersonaByChatbotParams;

type UseSelectPersonaByChatbotOptions = {
  initialData?: PersonasRow;
};

export function useSelectPersonaByChatbot(
  { chatbot_id }: UseSelectPersonaByChatbotProps,
  options?: UseSelectPersonaByChatbotOptions
) {
  const { selectPersonaByChatbot } = useBaseSelectPersonaByChatbot();

  const queryKey = chatbotsQueryKeys.persona(chatbot_id);
  const queryFn = async () => {
    const { data } = await selectPersonaByChatbot({ chatbot_id });
    return data;
  };

  return useQuery({ queryKey, queryFn, initialData: options?.initialData });
}
