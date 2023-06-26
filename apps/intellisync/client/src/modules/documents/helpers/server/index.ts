import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { Document } from 'langchain/document';

import { supabaseAdmin } from '@/lib/supabase/admin';

type StoreVectorsFromDocumentsParams = {
  documents: Document[];
};

export async function storeVectorsFromDocuments({
  documents,
}: StoreVectorsFromDocumentsParams) {
  const vectorStore = new SupabaseVectorStore(new OpenAIEmbeddings(), {
    client: supabaseAdmin,
    tableName: 'documents',
    queryName: 'match_documents',
  });
  await vectorStore.addDocuments(documents);

  return vectorStore;
}
