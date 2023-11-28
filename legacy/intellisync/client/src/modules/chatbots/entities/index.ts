import {
  DatabaseEnums,
  TableInsert,
  TableRow,
  TableUpdate,
} from '@/lib/supabase/types';

export type ModelTypes = DatabaseEnums['model_type'];

export const modelTypes = ['gpt-3.5-turbo', 'gpt-4'] as const;

export type ChatbotRow = TableRow<'chatbots'>;
export type ChatbotInsert = TableInsert<'chatbots'>;

export type ChatbotsSettingsRow = TableRow<'chatbots_settings'>;
export type ChatbotsSettingsUpdate = TableUpdate<'chatbots_settings'>;

export type ChatbotSettingsOptions = Omit<
  ChatbotsSettingsRow,
  'id' | 'created_at' | 'updated_at' | 'chatbot'
>;
