import { describe, expect, it } from 'vitest';
import { createFormDataFromFiles } from '.';

describe('createFormDataFromFiles', () => {
  const files = [
    new File(['any'], 'file1.pdf', { type: 'application/pdf' }),
    new File(['file'], 'file2.pdf', { type: 'application/pdf' }),
  ];

  it('should return a formData object', () => {
    const formData = createFormDataFromFiles(files as any);

    expect(formData).toBeInstanceOf(FormData);
  });

  it('should append files to form data', () => {
    const formData = createFormDataFromFiles(files as any);

    expect(formData.getAll('files')).toEqual(files);
  });
});
