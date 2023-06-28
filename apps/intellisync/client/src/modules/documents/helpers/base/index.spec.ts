import { describe, expect, it } from 'vitest';

import {
  createFormDataFromFiles,
  getFileExtension,
  injectEssentialMetadaOnDocuments,
} from '.';
import { Document } from 'langchain/document';
import { assertObjectProperties } from '@odyssey/tests';

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

  it('should return the correct file extension if file is csv', () => {
    const file = new File(['any'], 'file.csv');

    expect(getFileExtension(file)).toEqual('csv');
  });

  it('should return the correct file extension if file is epub', () => {
    const file = new File(['any'], 'file.epub');

    expect(getFileExtension(file)).toEqual('epub');
  });

  it('should return null if file extension is not found', () => {
    const file = new File(['any'], 'file');

    expect(getFileExtension(file)).toEqual(null);
  });
});

describe('injectEssentialMetadaOnDocuments', () => {
  it('should inject the essential metada on each document', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    updatedDocuments.forEach((document) => {
      expect(document.metadata).toHaveProperty('essential');
    });
  });

  it('should have the correct essential properties', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    const properties = ['chatbotId', 'fileName', 'characters'];

    updatedDocuments.forEach((document) => {
      assertObjectProperties(properties, document.metadata.essential);
    });
  });

  it('should have the correct chatbotId', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    updatedDocuments.forEach((document) => {
      expect(document.metadata.essential.chatbotId).toEqual('chatbotId');
    });
  });

  it('should have the correct fileName', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    updatedDocuments.forEach((document) => {
      expect(document.metadata.essential.fileName).toEqual('fileName');
    });
  });

  it('should have the correct characters', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    updatedDocuments.forEach((document) => {
      expect(document.metadata.essential.characters).toEqual(
        document.pageContent.length
      );
    });
  });

  it('should not mutate documents', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    expect(updatedDocuments).not.toBe(documents);
  });

  it('should have the same length', () => {
    const foo = new Document({ pageContent: 'foo' });
    const bar = new Document({ pageContent: 'bar' });

    const documents = [foo, bar];
    const updatedDocuments = injectEssentialMetadaOnDocuments({
      documents,
      chatbotId: 'chatbotId',
      fileName: 'fileName',
    });

    expect(updatedDocuments).toHaveLength(documents.length);
  });
});
