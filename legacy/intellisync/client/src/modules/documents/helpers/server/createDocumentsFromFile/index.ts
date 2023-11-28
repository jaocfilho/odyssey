import { handleFileLoad } from '../../../file_loaders';
import { injectEssentialMetadaOnDocuments } from '../../base';

type CreateDocumentsFromFileParams = {
  file: File;
  chatbotId: string;
};

export async function createDocumentsFromFile({
  file,
  chatbotId,
}: CreateDocumentsFromFileParams) {
  const fileName = file.name;
  const documents = await handleFileLoad(file);
  return injectEssentialMetadaOnDocuments({
    documents,
    chatbotId,
    fileName,
  });
}
