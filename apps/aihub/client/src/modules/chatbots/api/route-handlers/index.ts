import { createRouteHandlerSupabase } from '@/lib/supabase/route-handler';
import {
  type BaseSelectChatbotByIdParams,
  baseSelectChatbotById,
} from '../base';

type RouteHandlerSelectChatbotByIdParams = BaseSelectChatbotByIdParams;

export async function routeHandlerSelectChatbotById({
  id,
}: RouteHandlerSelectChatbotByIdParams) {
  const supabase = createRouteHandlerSupabase();

  return await baseSelectChatbotById({ id }, supabase);
}
