import { handleFileLoad } from '../../file_loaders';
import { injectEssentialMetadaOnDocuments } from '../../helpers/base';
import { getSupabaseVectorStore } from '../../vector_stores';

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

type ResolveFilesParams = {
  files: FormDataEntryValue[];
  chatbotId: string;
};

export async function resolveFiles({ files, chatbotId }: ResolveFilesParams) {
  return (files as File[]).map(
    async (file) => await createDocumentsFromFile({ file, chatbotId })
  );
}

type StoreVectorsFromDocumentsParams = {
  files: FormDataEntryValue[];
  chatbotId: string;
};

export async function storeVectorsFromFiles({
  files,
  chatbotId,
}: StoreVectorsFromDocumentsParams) {
  const docs = await Promise.all(await resolveFiles({ files, chatbotId }));

  const documents = docs.flat();

  const vectorStore = getSupabaseVectorStore();
  await vectorStore.addDocuments(documents);
}
