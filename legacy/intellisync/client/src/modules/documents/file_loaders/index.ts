import { BaseDocumentLoader } from 'langchain/document_loaders/base';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { DocxLoader } from 'langchain/document_loaders/fs/docx';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { JSONLoader } from 'langchain/document_loaders/fs/json';
import { CSVLoader } from 'langchain/document_loaders/fs/csv';

import { getFileExtension } from '../helpers/base';
import { UnsuportedFileExtensionError } from '../errors';

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

export async function loadText(file: Blob) {
  return await loadFile(file, TextLoader);
}

export async function loadJson(file: Blob) {
  return await loadFile(file, JSONLoader);
}

export async function loadCsv(file: Blob) {
  return await loadFile(file, CSVLoader);
}

const fileHandlersMap = {
  pdf: loadPdf,
  docx: loadDocx,
  txt: loadText,
  json: loadJson,
  csv: loadCsv,
};

type FileHandlersMap = typeof fileHandlersMap;

export async function handleFileLoad(
  file: Blob,
  fileHandlers: FileHandlersMap = fileHandlersMap
) {
  const extension = getFileExtension(file as File);

  switch (extension) {
    case 'pdf':
      const pdfHandler = fileHandlers.pdf;
      return await pdfHandler(file);

    case 'docx':
      const docxHandler = fileHandlers.docx;
      return await docxHandler(file);

    case 'txt':
      const txtHandler = fileHandlers.txt;
      return await txtHandler(file);

    case 'json':
      const jsonHandler = fileHandlers.json;
      return await jsonHandler(file);

    case 'csv':
      const csvHandler = fileHandlers.csv;
      return await csvHandler(file);

    default:
      throw new UnsuportedFileExtensionError();
  }
}
