import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Document } from 'langchain/document';

import { handleFile } from '../../file_loaders';
import { injectEssentialMetadaOnDocuments } from '../../helpers/base';
import { getSupabaseVectorStore } from '../../vector_stores';
import { storeVectorsFromFiles } from '.';

vi.mock('../../file_loaders', () => ({
  handleFile: vi.fn(() => {
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

describe('storeVectorsFromFiles', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call handleFile for each file', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files, chatbotId: 'any' });

    files.forEach((file) => {
      expect(handleFile).toHaveBeenCalledWith(file);
    });
  });

  it('should call injectEssentialMetadaOnDocuments', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files, chatbotId: 'any' });

    expect(injectEssentialMetadaOnDocuments).toHaveBeenCalled();
  });

  it('should call getSupabaseVectorStore', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files, chatbotId: 'any' });

    expect(getSupabaseVectorStore).toHaveBeenCalled();
  });
});
