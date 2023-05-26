import { baseSelectById, type BaseSelectByIdParams } from '@/lib/supabase/api';
import { Supabase } from '@/lib/supabase/types';

export type BaseSelectChatbotByIdParams = Pick<BaseSelectByIdParams, 'id'>;

export async function baseSelectChatbotById(
  { id }: BaseSelectChatbotByIdParams,
  supabase: Supabase
) {
  return await baseSelectById({ id, table: 'chatbots' }, supabase);
}
