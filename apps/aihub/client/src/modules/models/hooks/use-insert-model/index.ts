import { useSupabase } from '@/lib/supabase/Provider';
import {
  insertModel as baseInsertModel,
  type InsertModelParams,
} from '../../api';

export function useInsertModel() {
  const { supabase } = useSupabase();

  const insertModel = async ({ name, context, vibe }: InsertModelParams) => {
    return await baseInsertModel({ name, context, vibe }, supabase);
  };

  return { insertModel };
}
