import { renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { assertObjectProperties } from '@odyssey/tests';
import { generateRandomDocument } from '../../entities/factories';
import { useGroupedDocuments } from '.';

describe('useGroupedDocuments', () => {
  const { result, rerender, unmount } = renderHook(() => useGroupedDocuments());

  beforeEach(() => {
    rerender();
  });

  afterEach(() => {
    unmount();
  });

  it('should return the correct object', () => {
    const properties = [
      'documents',
      'groupedDocuments',
      'removeDocuments',
      'resetDocuments',
      'setDocuments',
    ];

    assertObjectProperties(properties, result.current);
  });

  it('should return an empty array of documents', () => {
    expect(result.current.documents).toHaveLength(0);
  });

  it('should return an empty array of grouped documents', () => {
    expect(result.current.groupedDocuments).toHaveLength(0);
  });

  it('should set the documents array', () => {
    const document = generateRandomDocument();
    const documents = [document];

    result.current.setDocuments(documents);

    expect(result.current.documents).toEqual(documents);
  });

  it('should reset the documents array', () => {
    const document = generateRandomDocument();
    const documents = [document];

    result.current.setDocuments(documents);
    result.current.resetDocuments();

    expect(result.current.documents).toEqual([]);
  });

  it('should remove a document from the documents array', () => {
    const firstDocument = generateRandomDocument();
    const secondDocument = generateRandomDocument();
    const documents = [firstDocument, secondDocument];

    result.current.setDocuments(documents);
    result.current.removeDocuments(firstDocument.metadata.essential.fileName);

    expect(result.current.documents).toEqual([secondDocument]);
  });

  it('should remove all documents with the same file name from the documents array', () => {
    const firstDocument = generateRandomDocument({ fileName: 'anyName' });
    const secondDocument = generateRandomDocument({ fileName: 'anyName' });
    const documents = [firstDocument, secondDocument];

    result.current.setDocuments(documents);
    result.current.removeDocuments(firstDocument.metadata.essential.fileName);

    expect(result.current.documents).toHaveLength(0);
  });

  it('should group the documents by file name', () => {
    const firstDocument = generateRandomDocument({ fileName: 'anyName' });
    const secondDocument = generateRandomDocument({ fileName: 'anyName' });
    const documents = [firstDocument, secondDocument];

    result.current.setDocuments(documents);

    expect(result.current.groupedDocuments).toEqual([
      {
        characters:
          firstDocument.metadata.essential.characters +
          secondDocument.metadata.essential.characters,
        fileName: 'anyName',
      },
    ]);
  });

  it('should group the documents by file name and return the correct number of groups', () => {
    const firstDocument = generateRandomDocument({ fileName: 'anyName' });
    const secondDocument = generateRandomDocument({ fileName: 'anyOtherName' });
    const documents = [firstDocument, secondDocument];

    result.current.setDocuments(documents);

    expect(result.current.groupedDocuments).toHaveLength(2);
  });

  it('should group the documents by file name and return the correct number of characters', () => {
    const firstDocument = generateRandomDocument({ fileName: 'anyName' });
    const secondDocument = generateRandomDocument({ fileName: 'anyName' });
    const thirdDocument = generateRandomDocument({ fileName: 'anyOtherName' });
    const documents = [firstDocument, secondDocument, thirdDocument];

    result.current.setDocuments(documents);

    expect(result.current.groupedDocuments).toEqual([
      {
        characters:
          firstDocument.metadata.essential.characters +
          secondDocument.metadata.essential.characters,
        fileName: 'anyName',
      },
      {
        characters: thirdDocument.metadata.essential.characters,
        fileName: 'anyOtherName',
      },
    ]);
  });

  it('should remove the entire group of the given fileName', () => {
    const firstDocument = generateRandomDocument({ fileName: 'anyName' });
    const secondDocument = generateRandomDocument({ fileName: 'anyName' });
    const thirdDocument = generateRandomDocument({ fileName: 'anyOtherName' });
    const documents = [firstDocument, secondDocument, thirdDocument];

    result.current.setDocuments(documents);
    result.current.removeDocuments(firstDocument.metadata.essential.fileName);

    expect(result.current.groupedDocuments).toEqual([
      {
        characters: thirdDocument.metadata.essential.characters,
        fileName: 'anyOtherName',
      },
    ]);
  });
});
