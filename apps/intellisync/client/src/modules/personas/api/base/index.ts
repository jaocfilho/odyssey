import type { Supabase } from '@/lib/supabase/types';
import { PersonasUpdate } from '../../entities';

export type BaseSelectPersonaByChatbotParams = {
  chatbot: string;
};

export async function baseSelectPersonaByChatbot(
  { chatbot }: BaseSelectPersonaByChatbotParams,
  supabase: Supabase
) {
  return await supabase.from('personas').select('*').eq('chatbot', chatbot);
}

export type BaseUpdatePersonaByChatbotParams = {
  chatbot: string;
  params: PersonasUpdate;
};

export async function baseUpdatePersonaByChatbot(
  { chatbot, params }: BaseUpdatePersonaByChatbotParams,
  supabase: Supabase
) {
  return await supabase
    .from('personas')
    .update(params)
    .eq('chatbot', chatbot)
    .select()
    .single();
}
