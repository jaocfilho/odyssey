import { createServerSupabase } from '@/lib/supabase/server';
import {
  type BaseSelectChatbotByIdParams,
  baseSelectAllChatbots,
  baseSelectChatbotById,
  type BaseSelectChatbotSettingsByIdParams,
  baseSelectChatbotSettingsById,
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

type ServerSelectChatbotSettingsByIdParams =
  BaseSelectChatbotSettingsByIdParams;

export async function serverSelectChatbotSettingsById({
  id,
}: ServerSelectChatbotSettingsByIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectChatbotSettingsById({ id }, supabase);
}
