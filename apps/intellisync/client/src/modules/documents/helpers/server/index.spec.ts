import { beforeEach, describe, expect, it, vi } from 'vitest';

import { handleFile } from '.';

vi.mock('@/lib/supabase/admin', () => ({
  supabaseAdmin: {},
}));

describe('handleFile', () => {
  const loadPdf = vi.fn();
  const loadDocx = vi.fn();
  const loadText = vi.fn();
  const loadJson = vi.fn();

  const fileHandlersMap = {
    pdf: loadPdf,
    docx: loadDocx,
    txt: loadText,
    json: loadJson,
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should call loadPdf if file is a pdf', async () => {
    const file = new File([], 'test.pdf');
    await handleFile(file, fileHandlersMap);

    expect(loadPdf).toHaveBeenCalledWith(file);
  });

  it('should call loadDocx if file is a docx', async () => {
    const file = new File([], 'test.docx');
    await handleFile(file, fileHandlersMap);

    expect(loadDocx).toHaveBeenCalledWith(file);
  });

  it('should call loadText if file is a txt', async () => {
    const file = new File([], 'test.txt');
    await handleFile(file, fileHandlersMap);

    expect(loadText).toHaveBeenCalledWith(file);
  });

  it('should call loadJson if file is a json', async () => {
    const file = new File([], 'test.json');
    await handleFile(file, fileHandlersMap);

    expect(loadJson).toHaveBeenCalledWith(file);
  });
});
