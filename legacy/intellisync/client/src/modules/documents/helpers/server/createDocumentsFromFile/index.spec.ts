import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Document } from 'langchain/document';

import { handleFileLoad } from '../../../file_loaders';
import { injectEssentialMetadaOnDocuments } from '../../base';
import { createDocumentsFromFile } from '.';

vi.mock('../../../file_loaders', () => ({
  handleFileLoad: vi.fn(() => {
    const document = new Document({ pageContent: 'foo' });
    return new Promise((resolve) => resolve([document]));
  }),
}));

vi.mock('../../base', () => ({
  injectEssentialMetadaOnDocuments: vi.fn(() => []),
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
