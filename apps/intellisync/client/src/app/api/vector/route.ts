import { NextRequest, NextResponse } from 'next/server';

import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

import { supabaseAdmin } from '@/lib/supabase/admin';
import { loadPdf } from '@/modules/documents/helpers';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as Blob;

  const docs = await loadPdf(file);

  const vectorStore = await SupabaseVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings(),
    {
      client: supabaseAdmin,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  );

  return new NextResponse(
    JSON.stringify({
      message: 'Vector API',
    }),
    {
      status: 200,
    }
  );
}
