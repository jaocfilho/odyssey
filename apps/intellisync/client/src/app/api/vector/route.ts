import { NextResponse } from 'next/server';

import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function GET(req: Request) {
  const vectorStore = await SupabaseVectorStore.fromTexts(
    ['This is a test document'],
    [{ id: 4 }],
    new OpenAIEmbeddings(),
    {
      client: supabaseAdmin,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  );

  const resultOne = await vectorStore.similaritySearch('Hello world', 1);

  console.log(resultOne);

  return new NextResponse(
    JSON.stringify({
      message: 'Vector API',
    }),
    {
      status: 200,
    }
  );
}
