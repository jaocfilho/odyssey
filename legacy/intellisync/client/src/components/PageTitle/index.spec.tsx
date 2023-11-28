import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { PageTitle } from '.';

describe('PageTitle', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render without crashing', () => {
    const { container } = render(<PageTitle>page title</PageTitle>);

    expect(container).toMatchSnapshot();
  });

  it('should render the children', () => {
    render(<PageTitle>page title</PageTitle>);

    const element = screen.getByText('page title');
    expect(element).toBeInTheDocument();
  });
});
