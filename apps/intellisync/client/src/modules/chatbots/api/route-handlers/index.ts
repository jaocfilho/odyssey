import { createRouteHandlerSupabase } from '@/lib/supabase/route-handler';
import {
  type BaseSelectChatbotByIdParams,
  baseSelectChatbotById,
  type BaseGetChatbotConfigParams,
  type BaseGetChatbotConfigReturnData,
  baseGetChatbotConfig,
} from '../base';

type RouteHandlerSelectChatbotByIdParams = BaseSelectChatbotByIdParams;

export async function routeHandlerSelectChatbotById({
  id,
}: RouteHandlerSelectChatbotByIdParams) {
  const supabase = createRouteHandlerSupabase();

  return await baseSelectChatbotById({ id }, supabase);
}

type RouteHandlerGetChatbotConfigParams = BaseGetChatbotConfigParams;
export type RouteHandlerGetChatbotConfigReturnData =
  BaseGetChatbotConfigReturnData;

export async function routeHandlerGetChatbotConfig({
  apikey,
  chatbot_id,
}: RouteHandlerGetChatbotConfigParams) {
  const supabase = createRouteHandlerSupabase();

  return await baseGetChatbotConfig({ apikey, chatbot_id }, supabase);
}
