import { type TableRow } from '@/lib/supabase/types';
import { Document } from 'langchain/document';

export type FileExtensions = 'pdf' | 'docx' | 'txt' | 'json' | 'csv';

export interface EssentialMetadata {
  chatbotId: string;
  fileName: string;
  characters: number;
}

export type ChatbotsFilesSourcesRow = TableRow<'chatbots_files_sources'>;

export type Documents = Document<Record<string, any>>[];
