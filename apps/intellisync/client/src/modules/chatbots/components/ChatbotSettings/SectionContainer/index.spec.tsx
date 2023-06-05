import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionContainer } from '.';

describe('SectionContainer', () => {
  it('should render its children', () => {
    render(<SectionContainer>SectionContainer</SectionContainer>);

    const element = screen.getByText('SectionContainer');
    expect(element).toBeInTheDocument();
  });
});
