import { BaseDocumentLoader } from 'langchain/dist/document_loaders/base';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { DocxLoader } from 'langchain/document_loaders/fs/docx';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { Document } from 'langchain/dist/document';

import { supabaseAdmin } from '@/lib/supabase/admin';
import { getFileExtension } from '../base';

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

export async function loadDocx(file: Blob) {
  return await loadFile(file, DocxLoader);
}

export async function handleFile(file: Blob) {
  const extension = getFileExtension(file as File);

  switch (extension) {
    case 'pdf':
      return await loadPdf(file);

    case 'docx':
      return await loadDocx(file);

    default:
      throw new Error('File extension not supported');
  }
}
