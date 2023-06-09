import type { Supabase } from '@/lib/supabase/types';
import { PersonasUpdate } from '../../entities';

export type BaseSelectPersonaByChatbotParams = {
  chatbot_id: string;
};

export async function baseSelectPersonaByChatbot(
  { chatbot_id }: BaseSelectPersonaByChatbotParams,
  supabase: Supabase
) {
  return await supabase.from('personas').select('*').eq('chatbot_id', chatbot_id);
}

export type BaseUpdatePersonaByChatbotParams = {
  chatbot_id: string;
  params: PersonasUpdate;
};

export async function baseUpdatePersonaByChatbot(
  { chatbot_id, params }: BaseUpdatePersonaByChatbotParams,
  supabase: Supabase
) {
  return await supabase
    .from('personas')
    .update(params)
    .eq('chatbot_id', chatbot_id)
    .select()
    .single();
}
