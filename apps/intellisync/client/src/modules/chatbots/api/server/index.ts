import { createServerSupabase } from '@/lib/supabase/server';
import {
  type BaseSelectChatbotByIdParams,
  baseSelectAllChatbots,
  baseSelectChatbotById,
} from '../base';

export async function serverSelectAllChatbots() {
  const supabase = createServerSupabase();

  return await baseSelectAllChatbots(supabase);
}

type ServerSelectChatbotByIdParams = BaseSelectChatbotByIdParams;

export async function serverSelectChatbotById({
  id,
}: ServerSelectChatbotByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectChatbotById({ id }, supabase);
}
