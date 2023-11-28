import { type TableRow } from '@/lib/supabase/types';
import { Document as LangchainDocument } from 'langchain/document';

export type FileExtensions = 'pdf' | 'docx' | 'txt' | 'json' | 'csv';

export interface EssentialMetadata {
  chatbotId: string;
  fileName: string;
  characters: number;
}

export type Document = LangchainDocument<
  Record<string, any> & {
    essential: EssentialMetadata;
  }
>;

export type Documents = Document[];

export type ChatbotsFilesSourcesRow = TableRow<'chatbots_files_sources'>;
