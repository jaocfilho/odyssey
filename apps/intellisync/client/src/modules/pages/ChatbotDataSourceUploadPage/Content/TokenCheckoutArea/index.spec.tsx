import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import {
  TokenCheckoutArea,
  TotalCharactersRow,
  StorageTokensRow,
  NewBalanceRow,
} from '.';

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
});
