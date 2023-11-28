import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Document } from 'langchain/document';

import { getSupabaseVectorStore } from '../../vector_stores';
import { createDocumentsFromFile } from '../../helpers/server/createDocumentsFromFile';
import { resolveFiles } from '.';

vi.mock('../../helpers/server/createDocumentsFromFile', () => ({
  createDocumentsFromFile: vi.fn(() => {
    const document = new Document({ pageContent: 'foo' });
    return [new Promise((resolve) => resolve([document]))];
  }),
}));

vi.mock('../../vector_stores', () => ({
  getSupabaseVectorStore: vi.fn(() => ({
    addDocuments: vi.fn(),
  })),
}));

describe('resolveFiles', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should should return an array', async () => {
    const files = [new File([], 'foo.pdf')];
    const result = await resolveFiles({ files, chatbotId: 'any' });

    expect(result).toBeInstanceOf(Array);
  });

  it('should call createDocumentsFromFile for each file', async () => {
    const files = [new File([], 'foo.pdf'), new File([], 'bar.pdf')];
    await resolveFiles({ files, chatbotId: 'any' });

    files.forEach((file) => {
      expect(createDocumentsFromFile).toHaveBeenCalledWith({
        file,
        chatbotId: 'any',
      });
    });
  });
});
