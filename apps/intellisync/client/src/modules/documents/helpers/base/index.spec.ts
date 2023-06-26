import { describe, expect, it } from 'vitest';
import { createFormDataFromFiles, getFileExtension } from '.';

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

describe('getFileExtension', () => {
  it('should return the correct file extension if file is pdf', () => {
    const file = new File(['any'], 'file.pdf');

    expect(getFileExtension(file)).toEqual('pdf');
  });

  it('should return the correct file extension if file is docx', () => {
    const file = new File(['any'], 'file.docx');

    expect(getFileExtension(file)).toEqual('docx');
  });

  it('should return the correct file extension if file is txt', () => {
    const file = new File(['any'], 'file.txt');

    expect(getFileExtension(file)).toEqual('txt');
  });

  it('should return the correct file extension if file is json', () => {
    const file = new File(['any'], 'file.json');

    expect(getFileExtension(file)).toEqual('json');
  });

  it('should return null if file extension is not found', () => {
    const file = new File(['any'], 'file');

    expect(getFileExtension(file)).toEqual(null);
  });

  it('should return null if file extension is empty', () => {
    const file = new File(['any'], 'file.');

    expect(getFileExtension(file)).toEqual(null);
  });
});
