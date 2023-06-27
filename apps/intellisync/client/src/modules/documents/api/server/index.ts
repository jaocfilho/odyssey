import { handleFile } from '../../file_loaders';
import { injectEssentialMetadaOnDocuments } from '../../helpers/base';
import { getSupabaseVectorStore } from '../../vector_stores';

type StoreVectorsFromDocumentsParams = {
  files: FormDataEntryValue[];
  chatbotId: string;
};

export async function storeVectorsFromFiles({
  files,
  chatbotId,
}: StoreVectorsFromDocumentsParams) {
  const docsPromises = await Promise.all(
    Array.from(files as File[]).map(async (file) => {
      const fileName = file.name;
      const documents = await handleFile(file);
      return injectEssentialMetadaOnDocuments({
        documents,
        chatbotId,
        fileName,
      });
    })
  );

  const docs = docsPromises.flat();
  // const documents = injectChatbotIdOnDocuments(docs, chatbotId);

  const vectorStore = getSupabaseVectorStore();
  await vectorStore.addDocuments(docs);
}
