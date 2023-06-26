import { beforeEach, describe, expect, it, vi } from 'vitest';

import { handleFile } from '.';

vi.mock('@/lib/supabase/admin', () => ({
  supabaseAdmin: {},
}));

describe('handleFile', () => {
  const loadPdf = vi.fn();
  const loadDocx = vi.fn();

  const fileHandlersMap = {
    pdf: loadPdf,
    docx: loadDocx,
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
});
