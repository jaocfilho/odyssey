import { ChatbotsRow, Supabase } from '@/lib/supabase/types';

export type BaseSelectChatbotByIdParams = Pick<ChatbotsRow, 'id'>;

export async function baseSelectChatbotById(supabase: Supabase) {}
