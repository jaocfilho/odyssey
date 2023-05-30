import { RemovePrefix } from '@odyssey/type-utils';
import { baseSelectById, type BaseSelectByIdParams } from '@/lib/supabase/api';
import { Supabase, DatabaseFunctions } from '@/lib/supabase/types';

export type BaseSelectChatbotByIdParams = Pick<BaseSelectByIdParams, 'id'>;

export async function baseSelectChatbotById(
  { id }: BaseSelectChatbotByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id, table: 'chatbots' }, supabase);
}

type GetChatbotSettingsArgs = DatabaseFunctions['get_chatbot_settings']['Args'];

export type BaseGetChatbotSettingsParams = RemovePrefix<
  GetChatbotSettingsArgs,
  'p_'
>;

export async function baseGetChatbotSettings(
  { apikey, chatbot_id }: BaseGetChatbotSettingsParams,
  supabase: Supabase
) {
  return await supabase
    .rpc('get_chatbot_settings', {
      p_apikey: apikey,
      p_chatbot_id: chatbot_id,
    })
    .single();
}
