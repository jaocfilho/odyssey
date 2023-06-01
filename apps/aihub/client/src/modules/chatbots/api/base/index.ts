import { RemovePrefix } from '@odyssey/type-utils';
import {
  baseInsert,
  type BaseInsertParams,
  baseSelectById,
  type BaseSelectByIdParams,
  baseSelectAll,
} from '@/lib/supabase/api';
import {
  Supabase,
  DatabaseFunctions,
  ChatbotsSettingsRow,
  PersonasRow,
} from '@/lib/supabase/types';

export type BaseSelectChatbotByIdParams = Pick<BaseSelectByIdParams, 'id'>;

export async function baseSelectChatbotById(
  { id }: BaseSelectChatbotByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id, table: 'chatbots' }, supabase);
}

type GetChatbotConfigArgs = DatabaseFunctions['get_chatbot_config']['Args'];

export type BaseGetChatbotConfigParams = RemovePrefix<
  GetChatbotConfigArgs,
  'p_'
>;

export type BaseGetChatbotConfigReturnData = {
  settings: Pick<ChatbotsSettingsRow, 'model' | 'temperature'>;
  persona: Pick<
    PersonasRow,
    | 'answer_size'
    | 'domain'
    | 'informality'
    | 'language_complexity'
    | 'level_of_detail'
    | 'style'
    | 'target_audience'
    | 'tone'
    | 'topic'
  >;
};

export async function baseGetChatbotConfig(
  { apikey, chatbot_id }: BaseGetChatbotConfigParams,
  supabase: Supabase
) {
  return await supabase
    .rpc('get_chatbot_config', {
      p_apikey: apikey,
      p_chatbot_id: chatbot_id,
    })
    .returns<BaseGetChatbotConfigReturnData>();
}

export type BaseInsertChatbotParams = BaseInsertParams<'chatbots'>;

export async function baseInsertChatbot(
  params: BaseInsertChatbotParams,
  supabase: Supabase
) {
  return await baseInsert(params, 'chatbots', supabase);
}

export async function baseSelectAllChatbots(supabase: Supabase) {
  return await baseSelectAll('chatbots', supabase);
}
