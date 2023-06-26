import { BaseDocumentLoader } from 'langchain/dist/document_loaders/base';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { Document } from 'langchain/dist/document';
import { supabaseAdmin } from '@/lib/supabase/admin';

type StoreVectorsFromDocumentsParams = {
  documents: Document[];
};

export async function storeVectorsFromDocuments({
  documents,
}: StoreVectorsFromDocumentsParams) {
  return await SupabaseVectorStore.fromDocuments(
    documents,
    new OpenAIEmbeddings(),
    {
      client: supabaseAdmin,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  );
}

async function loadFile<T extends BaseDocumentLoader>(
  file: Blob,
  Loader: new (file: Blob) => T
) {
  const loader = new Loader(file);
  const docs = await loader.load();
  return docs;
}

export async function loadPdf(file: Blob) {
  return await loadFile(file, PDFLoader);
}
