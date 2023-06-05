import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionContent } from '.';

describe('SectionContent', () => {
  it('should render its children', () => {
    render(<SectionContent>SectionContent</SectionContent>);

    const element = screen.getByText('SectionContent');
    expect(element).toBeInTheDocument();
  });
});
