import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useStorageTokens } from '@/modules/storage-tokens/hooks/use-storage-tokens';
import { DocumentsArea } from '.';

vi.mock('@/modules/storage-tokens/hooks/use-storage-tokens', () => ({
  useStorageTokens: vi.fn(() => ({
    data: {
      remaining_storage_tokens: 0,
    },
  })),
}));

describe('DocumentsArea', () => {
  const groupedDocuments = [
    { fileName: 'file1', characters: 100 },
    { fileName: 'file2', characters: 200 },
  ];

  const removeDocuments = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render each file name', () => {
    render(
      <DocumentsArea
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
      />
    );

    groupedDocuments.forEach(({ fileName, characters }) => {
      const charactersColumn = `${characters} characters`;

      expect(screen.getByText(fileName)).toBeInTheDocument();
      expect(screen.getByText(charactersColumn)).toBeInTheDocument();
    });
  });

  it('should render the total characters', () => {
    render(
      <DocumentsArea
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const totalCharactersRow = checkoutRows[0];

    expect(
      within(totalCharactersRow).getAllByText('Total characters')
    ).toHaveLength(2);

    expect(within(totalCharactersRow).getByText('300')).toBeInTheDocument();
  });

  it('should render the remaining storage row', () => {
    render(
      <DocumentsArea
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        storageTokens={1000}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const remainingStorageTokensRow = checkoutRows[1];

    expect(
      within(remainingStorageTokensRow).getAllByText('Storage tokens balance')
    ).toHaveLength(2);

    expect(
      within(remainingStorageTokensRow).getByText('1000')
    ).toBeInTheDocument();
  });

  it('should not render the remaining storage tokens if storageTokens is falsy', () => {
    render(
      <DocumentsArea
        groupedDocuments={groupedDocuments}
        removeDocuments={removeDocuments}
        storageTokens={0}
      />
    );

    const checkoutRows = screen.getAllByRole('row');
    const remainingStorageTokensRow = checkoutRows[1];

    expect(
      within(remainingStorageTokensRow).queryAllByText('Storage tokens balance')
    ).toHaveLength(0);
  });
});
