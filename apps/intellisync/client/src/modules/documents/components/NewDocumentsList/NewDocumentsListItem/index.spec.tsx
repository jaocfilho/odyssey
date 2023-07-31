import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { NewDocumentsListItem } from '.';

describe('NewDocumentsListItem', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the file name', () => {
    render(<NewDocumentsListItem fileName="anyName" characters={1000} />);

    const element = screen.getByText('anyName');
    expect(element).toBeInTheDocument();
  });

  it('should render the number of characters', () => {
    render(<NewDocumentsListItem fileName="anyName" characters={1000} />);

    const element = screen.getByText('1000 characters');
    expect(element).toBeInTheDocument();
  });
});
