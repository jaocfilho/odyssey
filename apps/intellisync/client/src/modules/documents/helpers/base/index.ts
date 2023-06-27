import { Document } from 'langchain/document';

import { FileExtensions } from '../../entities';

export function createFormDataFromFiles(files: FileList) {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    formData.append('files', file);
  }

  return formData;
}

export function getFileExtension(file: File): FileExtensions | null {
  const fileName = file.name;
  const extension = fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);

  const nullExtension = extension === '';
  if (nullExtension) return null;

  return extension.toLowerCase() as FileExtensions;
}

type InjectEssentialMetadaOnDocumentsParams = {
  documents: Document[];
  chatbotId: string;
  fileName: string;
};

export function injectEssentialMetadaOnDocuments({
  documents,
  chatbotId,
  fileName,
}: InjectEssentialMetadaOnDocumentsParams) {
  const essential = {
    chatbotId,
    fileName,
  };

  return documents.map((document) => {
    document.metadata.essential = essential;
    return document;
  });
}
