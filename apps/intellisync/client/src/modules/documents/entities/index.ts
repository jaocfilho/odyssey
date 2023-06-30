import { TableRow } from '@/lib/supabase/types';

export type FileExtensions = 'pdf' | 'docx' | 'txt' | 'json' | 'csv';

export interface EssentialMetadata {
  chatbotId: string;
  fileName: string;
  characters: number;
}

export type ChatbotsFilesSourcesRow = TableRow<'chatbots_files_sources'>;
