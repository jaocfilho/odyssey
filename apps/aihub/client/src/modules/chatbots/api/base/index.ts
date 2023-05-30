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

export type BaseGetChatbotSettingsParams =
  DatabaseFunctions['get_chatbot_settings']['Args'];

type ModifiedGetChatbotSettingsParams = RemovePrefix<
  BaseGetChatbotSettingsParams,
  'p_'
>;

export async function baseGetChatbotSettings(
  { id }: BaseSelectChatbotByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id, table: 'chatbots' }, supabase);
}
