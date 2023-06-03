import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { DescriptionListItem } from '.';

describe('DescriptionListItem', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the term and details correctly', () => {
    const term = 'Term';
    const details = 'Details';

    render(<DescriptionListItem term={term} details={details} />);

    const termElement = screen.getByText(term);
    const detailsElement = screen.getByText(details);

    expect(termElement).toBeInTheDocument();
    expect(detailsElement).toBeInTheDocument();
  });

  it('renders term and details in correct elements', () => {
    const term = 'Term';
    const details = 'Details';

    render(<DescriptionListItem term={term} details={details} />);

    const termElement = screen.getByText(term);
    const detailsElement = screen.getByText(details);

    expect(termElement.tagName).toBe('DT');
    expect(detailsElement.tagName).toBe('DD');
  });
});
