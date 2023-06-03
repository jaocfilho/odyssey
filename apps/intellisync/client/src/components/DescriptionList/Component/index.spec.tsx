import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { DescriptionListComponent } from '.';

describe('DescriptionListComponent', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a list of description items', () => {
    const items = [
      { term: 'Term 1', details: 'Details 1' },
      { term: 'Term 2', details: 'Details 2' },
      { term: 'Term 3', details: 'Details 3' },
    ];

    render(<DescriptionListComponent items={items} />);

    const listItemElements = screen.getAllByRole('term');
    expect(listItemElements.length).toBe(items.length);
  });

  it('should render each description item', () => {
    const items = [
      { term: 'Term 1', details: 'Details 1' },
      { term: 'Term 2', details: 'Details 2' },
      { term: 'Term 3', details: 'Details 3' },
    ];

    render(<DescriptionListComponent items={items} />);

    items.forEach(({ term, details }) => {
      const termElement = screen.getByText(term);
      const detailsElement = screen.getByText(details);

      expect(termElement).toBeInTheDocument();
      expect(detailsElement).toBeInTheDocument();
    });
  });
});
