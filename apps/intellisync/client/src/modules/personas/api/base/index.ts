import type { Supabase } from '@/lib/supabase/types';

export type BaseSelectPersonaByChatbotParams = {
  chatbot: string;
};

export async function baseSelectPersonaByChatbot(
  { chatbot }: BaseSelectPersonaByChatbotParams,
  supabase: Supabase
) {
  return await supabase.from('personas').select('*').eq('chatbot', chatbot);
}
