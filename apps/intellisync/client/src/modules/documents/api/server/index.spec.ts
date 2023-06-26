import { beforeEach, describe, expect, it, vi } from 'vitest';

import { loadPdf, storeVectorsFromDocuments } from '../../helpers/server';
import { storeVectorsFromFiles } from '.';

vi.mock('../../helpers/server', () => ({
  loadPdf: vi.fn(),
  storeVectorsFromDocuments: vi.fn(),
}));

describe('storeVectorsFromFiles', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call loadPdf for each file', async () => {
    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files });

    files.forEach((file) => {
      expect(loadPdf).toHaveBeenCalledWith(file);
    });
  });

  it('should call storeVectorsFromDocuments with the loaded documents', async () => {
    const documents = [] as any;
    vi.mocked(loadPdf).mockReturnValue(
      new Promise((resolve) => resolve(documents))
    );

    const files = [new Blob(), new Blob()] as FormDataEntryValue[];
    await storeVectorsFromFiles({ files });

    expect(storeVectorsFromDocuments).toHaveBeenCalledWith({ documents });
  });
});
