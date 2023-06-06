import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseUpdateChatbotSettingsById,
  type BaseUpdateChatbotSettingsByIdParams,
} from '../../api/base';
import { invalidateChatbotSettingsQuery } from '../../query-keys';
import {
  cancelChatbotSettingsQuery,
  getChatbotSettingsQuery,
  setChatbotSettingsQuery,
} from '../../helpers';
import { ChatbotsSettingsRow } from '../../entities';

export function useBaseUpdateChatbotSettingsById() {
  const { supabase } = useSupabase();

  const updateChatbotSettingsById = async ({
    id,
    settings,
  }: BaseUpdateChatbotSettingsByIdParams) => {
    return await baseUpdateChatbotSettingsById({ id, settings }, supabase);
  };

  return { updateChatbotSettingsById };
}

export const handleMutation = async ({
  id,
  settings,
}: BaseUpdateChatbotSettingsByIdParams) => {
  // Cancel any outgoing refetches
  // so they don't overwrite our optimistic update
  await cancelChatbotSettingsQuery(id);

  const previousSettings = getChatbotSettingsQuery(id);

  setChatbotSettingsQuery(id, settings);

  return { previousSettings };
};

type HandleErrorParams = {
  id: string;
  context?: { previousSettings?: ChatbotsSettingsRow };
};

export function handleError({ context, id }: HandleErrorParams) {
  if (context?.previousSettings) {
    setChatbotSettingsQuery(id, context?.previousSettings);
  }
}

export function useUpdateChatbotSettingsById() {
  const { updateChatbotSettingsById } = useBaseUpdateChatbotSettingsById();

  return useMutation({
    mutationFn: updateChatbotSettingsById,
    onMutate: handleMutation,

    onError: (_, { id }, context) => {
      handleError({ context, id });
    },

    onSettled(_, __, { id }) {
      invalidateChatbotSettingsQuery(id);
    },
  });
}
