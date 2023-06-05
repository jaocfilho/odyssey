import { DatabaseEnums } from '@/lib/supabase/types';

export type ModelTypes = DatabaseEnums['model_type'];

export const modelTypes: ModelTypes[] = ['gpt-3.5-turbo', 'gpt-4'];
