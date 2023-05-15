import { useSupabase } from '@/lib/supabase/Provider';
import {
  baseInsertGpt35Refinement,
  type BaseInsertGpt35RefinementParams,
} from '../../api/base';

type InsertGpt35RefinementParams = BaseInsertGpt35RefinementParams;

export function useInsertGpt35Refinement() {
  const { supabase } = useSupabase();

  const insertGpt35Refinement = async ({
    app,
    context,
    temperature,
    vibe,
  }: InsertGpt35RefinementParams) => {
    return await baseInsertGpt35Refinement(
      { app, context, temperature, vibe },
      supabase
    );
  };

  return { insertGpt35Refinement };
}
