import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Document } from 'langchain/document';

import { storeVectorsFromDocuments } from '../../helpers/server';
import { handleFile } from '../../file_loaders';
import { injectChatbotIdOnDocuments } from '../../helpers/base';
import { storeVectorsFromFiles } from '.';

vi.mock('../../helpers/server', () => ({
  storeVectorsFromDocuments: vi.fn(),
}));

vi.mock('../../file_loaders', () => ({
  handleFile: vi.fn(() => {
    const document = new Document({ pageContent: 'foo' });
    return new Promise((resolve) => resolve([document]));
  }),
}));

vi.mock('../../helpers/base', () => ({
  injectChatbotIdOnDocuments: vi.fn(),
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

  it('should call storeVectorsFromDocuments with the loaded documents', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files, chatbotId: 'any' });

    expect(storeVectorsFromDocuments).toHaveBeenCalled();
  });

  it('should call injectChatbotIdOnDocuments', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files, chatbotId: 'any' });

    expect(injectChatbotIdOnDocuments).toHaveBeenCalled();
  });
});
