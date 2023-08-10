import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

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
  it('should render the total characters value', () => {
    render(<TokenCheckoutArea totalCharacters={100} />);

    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should not render the storage tokens row if storageTokens is not passed', () => {
    render(<TokenCheckoutArea totalCharacters={100} />);

    const rowHeaders = screen.queryAllByText('Storage tokens balance');

    expect(rowHeaders).toHaveLength(0);
  });

  it('should render the storage tokens row if storageTokens is passed', () => {
    render(<TokenCheckoutArea totalCharacters={100} storageTokens={100} />);

    const rowHeaders = screen.getAllByText('Storage tokens balance');

    expect(rowHeaders).toHaveLength(2);
  });
});
