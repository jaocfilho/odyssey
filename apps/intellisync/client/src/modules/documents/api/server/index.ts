import { createServerSupabase } from '@/lib/supabase/server';
import { createDocumentsFromFile } from '../../helpers/server/createDocumentsFromFile';
import { getSupabaseVectorStore } from '../../vector_stores';
import {
  baseSelectAllFileSourcesByChatbotId,
  type BaseSelectFileSourcesByChatbotIdParams,
} from '../base';
import { Documents } from '../../entities';

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
}: BaseSelectFileSourcesByChatbotIdParams) {
  const supabase = createServerSupabase();

  return await baseSelectAllFileSourcesByChatbotId({ chatbot_id }, supabase);
}

type ServerParseFilesParams = {
  files: FormDataEntryValue[];
  chatbotId: string;
};

type ServerParseFilesResponse = {
  documents: Documents;
};

export async function serverParseFiles({
  chatbotId,
  files,
}: ServerParseFilesParams): Promise<ServerParseFilesResponse> {
  const docs = await Promise.all(await resolveFiles({ files, chatbotId }));

  const documents = docs.flat();

  return { documents };
}
