import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

import { supabaseAdmin } from '@/lib/supabase/admin';

export function getSupabaseVectorStore() {
  const vectorStore = new SupabaseVectorStore(new OpenAIEmbeddings(), {
    client: supabaseAdmin,
    tableName: 'documents',
    queryName: 'match_documents',
  });

  return vectorStore;
}
