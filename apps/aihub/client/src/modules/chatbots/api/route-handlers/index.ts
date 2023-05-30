import { createRouteHandlerSupabase } from '@/lib/supabase/route-handler';
import {
  type BaseSelectChatbotByIdParams,
  baseSelectChatbotById,
  type BaseGetChatbotSettingsParams,
  baseGetChatbotSettings,
} from '../base';

type RouteHandlerSelectChatbotByIdParams = BaseSelectChatbotByIdParams;

export async function routeHandlerSelectChatbotById({
  id,
}: RouteHandlerSelectChatbotByIdParams) {
  const supabase = createRouteHandlerSupabase();

  return await baseSelectChatbotById({ id }, supabase);
}

type RouteHandlerGetChatbotSettingsParams = BaseGetChatbotSettingsParams;

export async function routeHandlerGetChatbotSettings({
  apikey,
  chatbot_id,
}: RouteHandlerGetChatbotSettingsParams) {
  const supabase = createRouteHandlerSupabase();

  return await baseGetChatbotSettings({ apikey, chatbot_id }, supabase);
}
