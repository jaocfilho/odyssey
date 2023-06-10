import { createServerSupabase } from '@/lib/supabase/server';
import { baseSelectPersonaByChatbot } from '../base';

type ServerSelectPersonaByChatbotParams = {
  chatbot_id: string;
};

export async function serverSelectPersonaByChatbot({
  chatbot_id,
}: ServerSelectPersonaByChatbotParams) {
  const supabase = createServerSupabase();

  return await baseSelectPersonaByChatbot({ chatbot_id }, supabase);
}
