import { handleFile } from '../../file_loaders';
import { injectChatbotIdOnDocuments } from '../../helpers/base';
import { storeVectorsFromDocuments } from '../../helpers/server';

type StoreVectorsFromDocumentsParams = {
  files: FormDataEntryValue[];
  chatbotId: string;
};

export async function storeVectorsFromFiles({
  files,
  chatbotId,
}: StoreVectorsFromDocumentsParams) {
  const docsPromises = await Promise.all(
    Array.from(files).map(async (file) => {
      return await handleFile(file as Blob);
    })
  );

  const docs = docsPromises.flat();
  const documents = injectChatbotIdOnDocuments(docs, chatbotId);
  await storeVectorsFromDocuments({ documents });
}
