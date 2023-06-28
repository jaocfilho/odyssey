export type FileExtensions = 'pdf' | 'docx' | 'txt' | 'json' | 'csv';

export interface EssentialMetadata {
  chatbotId: string;
  fileName: string;
  characters: number;
}
