import { NextRequest, NextResponse } from 'next/server';

import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as Blob;

  const loader = new PDFLoader(file);

  const docs = await loader.load();

  const vectorStore = await SupabaseVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings(),
    {
      client: supabaseAdmin,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  );

  const result = await vectorStore.similaritySearch('Hello world', 1);

  return new NextResponse(
    JSON.stringify({
      message: 'Vector API',
    }),
    {
      status: 200,
    }
  );
}
