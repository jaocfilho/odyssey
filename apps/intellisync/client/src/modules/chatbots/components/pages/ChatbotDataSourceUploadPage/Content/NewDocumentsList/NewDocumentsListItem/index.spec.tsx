import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { NewDocumentsListItem } from '.';

describe('NewDocumentsListItem', () => {
  const removeDocuments = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the file name', () => {
    render(
      <NewDocumentsListItem
        removeDocuments={removeDocuments}
        fileName="anyName"
        characters={1000}
      />
    );

    const element = screen.getByText('anyName');
    expect(element).toBeInTheDocument();
  });

  it('should render the number of characters', () => {
    render(
      <NewDocumentsListItem
        removeDocuments={removeDocuments}
        fileName="anyName"
        characters={1000}
      />
    );

    const element = screen.getByText('1000 characters');
    expect(element).toBeInTheDocument();
  });

  it('should render the x button', () => {
    render(
      <NewDocumentsListItem
        removeDocuments={removeDocuments}
        fileName="anyName"
        characters={1000}
      />
    );

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should call removeDocuments when the x button is clicked', async () => {
    render(
      <NewDocumentsListItem
        removeDocuments={removeDocuments}
        fileName="anyName"
        characters={1000}
      />
    );

    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(removeDocuments).toHaveBeenCalled();
  });

  it('should pass the file name to removeDocuments when the x button is clicked', async () => {
    render(
      <NewDocumentsListItem
        removeDocuments={removeDocuments}
        fileName="anyName"
        characters={1000}
      />
    );

    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(removeDocuments).toHaveBeenCalledWith('anyName');
  });
});
