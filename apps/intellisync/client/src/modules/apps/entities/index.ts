import { AppsTableRow, Gpt35RefinementRow } from '@/lib/supabase/types';

type AppColumns = Pick<
  AppsTableRow,
  'id' | 'name' | 'model' | 'description' | 'created_at'
>;

type Gpt35RefinementColumns = Pick<
  Gpt35RefinementRow,
  'vibe' | 'temperature' | 'context'
>;

export type App = AppColumns & {
  refinement: Gpt35RefinementColumns;
};
