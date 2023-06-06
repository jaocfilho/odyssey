import { DatabaseEnums, TableRow, TableUpdate } from '@/lib/supabase/types';

export type ModelTypes = DatabaseEnums['model_type'];

export const modelTypes = ['gpt-3.5-turbo', 'gpt-4'] as const;

export type ChatbotsSettingsRow = TableRow<'chatbots_settings'>;

export type ChatbotsSettingsUpdate = TableUpdate<'chatbots_settings'>;
