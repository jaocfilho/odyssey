import { createDocumentsFromFile } from '../../helpers/server/createDocumentsFromFile';
import { getSupabaseVectorStore } from '../../vector_stores';

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
