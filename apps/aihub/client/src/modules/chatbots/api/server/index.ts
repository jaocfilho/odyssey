import { createServerSupabase } from '@/lib/supabase/server';
import { baseSelectAllChatbots } from '../base';

export async function serverSelectAllChatbots() {
  const supabase = createServerSupabase();

  return await baseSelectAllChatbots(supabase);
}
