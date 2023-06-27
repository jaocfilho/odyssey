import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Document } from 'langchain/document';

import { handleFileLoad } from '../../file_loaders';
import { injectEssentialMetadaOnDocuments } from '../../helpers/base';
import { getSupabaseVectorStore } from '../../vector_stores';
import {
  createDocumentsFromFile,
  resolveFiles,
  storeVectorsFromFiles,
} from '.';

vi.mock('../../file_loaders', () => ({
  handleFileLoad: vi.fn(() => {
    const document = new Document({ pageContent: 'foo' });
    return new Promise((resolve) => resolve([document]));
  }),
}));

vi.mock('../../helpers/base', () => ({
  injectEssentialMetadaOnDocuments: vi.fn(() => []),
}));

vi.mock('../../vector_stores', () => ({
  getSupabaseVectorStore: vi.fn(() => ({
    addDocuments: vi.fn(),
  })),
}));

describe('createDocumentsFromFile', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call handleFileLoad', async () => {
    const file = new File([], 'foo.pdf');

    await createDocumentsFromFile({ file, chatbotId: 'any' });

    expect(handleFileLoad).toHaveBeenCalledWith(file);
  });

  it('should call injectEssentialMetadaOnDocuments', async () => {
    const file = new File([], 'foo.pdf');
    const documents = await handleFileLoad(file);

    await createDocumentsFromFile({ file, chatbotId: 'any' });

    expect(injectEssentialMetadaOnDocuments).toHaveBeenCalledWith({
      documents,
      chatbotId: 'any',
      fileName: 'foo.pdf',
    });
  });
});

describe('resolveFiles', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should should return an array', async () => {
    const files = [new File([], 'foo.pdf')];
    const result = await resolveFiles({ files, chatbotId: 'any' });

    expect(result).toBeInstanceOf(Array);
  });
});

describe('storeVectorsFromFiles', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call getSupabaseVectorStore', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files, chatbotId: 'any' });

    expect(getSupabaseVectorStore).toHaveBeenCalled();
  });
});
