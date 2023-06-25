import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { Document } from 'langchain/dist/document';
// import { supabaseAdmin } from '@/lib/supabase/admin';

export async function loadPdf(file: Blob) {
  const loader = new PDFLoader(file);

  const docs = await loader.load();
  return docs;
}

type StoreVectorsFromDocumentsParams = {
  documents: Document[];
};

// export async function storeVectorsFromDocuments({
//   documents,
// }: StoreVectorsFromDocumentsParams) {
//   return await SupabaseVectorStore.fromDocuments(
//     documents,
//     new OpenAIEmbeddings(),
//     {
//       client: supabaseAdmin,
//       tableName: 'documents',
//       queryName: 'match_documents',
//     }
//   );
// }

export function createFormDataFromFiles(files: FileList) {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    formData.append('files', file);
  }

  return formData;
}
