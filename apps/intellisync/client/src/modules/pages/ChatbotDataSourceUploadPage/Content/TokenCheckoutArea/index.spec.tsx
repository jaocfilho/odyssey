import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useStorageTokens } from '@/modules/storage-tokens/hooks/use-storage-tokens';
import {
  TokenCheckoutArea,
  TotalCharactersRow,
  StorageTokensRow,
  NewBalanceRow,
} from '.';

vi.mock('@/modules/storage-tokens/hooks/use-storage-tokens', () => ({
  useStorageTokens: vi.fn(() => ({
    data: {
      remaining_storage_tokens: 0,
    },
  })),
}));

beforeEach(() => {
  vi.restoreAllMocks();
});

afterEach(() => {
  cleanup();
});

describe('TotalCharactersRow', () => {
  it('should render the total characters row', () => {
    render(<TotalCharactersRow totalCharacters={100} />);

    const rowHeaders = screen.getAllByText('Total characters');
    const rowValue = screen.getByText('100');

    expect(rowHeaders).toHaveLength(2);
    expect(rowValue).toBeInTheDocument();
  });
});

describe('StorageTokensRow', () => {
  it('should render the storage tokens row', () => {
    render(<StorageTokensRow storageTokens={100} />);

    const rowHeaders = screen.getAllByText('Storage tokens balance');
    const rowValue = screen.getByText('100');

    expect(rowHeaders).toHaveLength(2);
    expect(rowValue).toBeInTheDocument();
  });
});

describe('NewBalanceRow', () => {
  it('should render the new balance row', () => {
    render(<NewBalanceRow newBalance={100} />);

    const rowHeaders = screen.getAllByText('New balance');
    const rowValue = screen.getByText('100');

    expect(rowHeaders).toHaveLength(2);
    expect(rowValue).toBeInTheDocument();
  });
});

describe('TokenCheckoutArea', () => {
  const items = [
    { characters: 100, fileName: 'file1' },
    { characters: 200, fileName: 'file2' },
  ];

  it('should render the total characters value', () => {
    render(<TokenCheckoutArea items={items} />);

    expect(screen.getByText('300')).toBeInTheDocument();
  });

  it('should not render the storage tokens row if the user storage tokens query isnt complete', () => {
    // @ts-ignore
    vi.mocked(useStorageTokens).mockReturnValue({ data: undefined });

    render(<TokenCheckoutArea items={items} />);

    const rowHeaders = screen.queryAllByText('Storage tokens balance');

    expect(rowHeaders).toHaveLength(0);
  });

  it('should render the storage tokens row if the user storage tokens query is complete', () => {
    render(<TokenCheckoutArea items={items} />);

    const rowHeaders = screen.getAllByText('Storage tokens balance');

    expect(rowHeaders).toHaveLength(2);
  });
});
