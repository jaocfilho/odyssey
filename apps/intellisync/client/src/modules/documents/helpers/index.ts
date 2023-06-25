import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

export async function loadPdf(file: Blob) {
  const loader = new PDFLoader(file);

  const docs = await loader.load();
  return docs;
}

export function createFormDataFromFiles(files: FileList) {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    formData.append('files', file);
  }

  return formData;
}
