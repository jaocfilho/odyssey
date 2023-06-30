import { createServerSupabase } from '@/lib/supabase/server';
import { createDocumentsFromFile } from '../../helpers/server/createDocumentsFromFile';
import { getSupabaseVectorStore } from '../../vector_stores';
import {
  selectAllFileSourcesByChatbotId,
  type SelectFileSourcesByChatbotIdParams,
} from '../base';

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

export async function serverSelectAllFileSourcesByChatbotId({
  chatbot_id,
}: SelectFileSourcesByChatbotIdParams) {
  const supabase = createServerSupabase();

  return await selectAllFileSourcesByChatbotId({ chatbot_id }, supabase);
}
