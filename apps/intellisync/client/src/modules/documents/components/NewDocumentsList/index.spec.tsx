import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { NewDocumentsListItem } from './NewDocumentsListItem';
import { NewDocumentsList } from '.';

vi.mock('./NewDocumentsListItem', () => ({
  NewDocumentsListItem: vi.fn(),
}));

describe('NewDocumentsList', () => {
  const items = [
    { fileName: 'anyName', characters: 1000 },
    { fileName: 'anyName2', characters: 2000 },
    { fileName: 'anyName3', characters: 3000 },
  ];

  const removeDocument = vi.fn();

  it('should render an item for each document on the array', () => {
    render(<NewDocumentsList items={items} removeDocument={removeDocument} />);

    expect(NewDocumentsListItem).toHaveBeenCalledTimes(items.length);
  });
});
