import { describe, expect, it } from 'vitest';
import { appendFilesToFormData } from '.';

describe('appendFilesToFormData', () => {
  const files = [
    new File(['any'], 'file1.pdf', { type: 'application/pdf' }),
    new File(['file'], 'file2.pdf', { type: 'application/pdf' }),
  ];

  it('should return a formData object', () => {
    const formData = appendFilesToFormData(files as any);

    expect(formData).toBeInstanceOf(FormData);
  });

  it('should append files to form data', () => {
    const formData = appendFilesToFormData(files as any);

    expect(formData.getAll('files')).toEqual(files);
  });
});
