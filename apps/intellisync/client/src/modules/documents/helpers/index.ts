import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

export async function loadPdf(file: Blob) {
  const loader = new PDFLoader(file);

  const docs = await loader.load();
  return docs;
}
