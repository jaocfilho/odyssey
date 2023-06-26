import { BaseDocumentLoader } from 'langchain/dist/document_loaders/base';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

export async function loadFile<T extends BaseDocumentLoader>(
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
