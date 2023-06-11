import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { SectionInfo } from '.';

describe('SectionInfo', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the title', () => {
    render(<SectionInfo title="Title" description="Description" />);

    const element = screen.getByText('Title');
    expect(element).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<SectionInfo title="Title" description="Description" />);

    const element = screen.getByText('Description');
    expect(element).toBeInTheDocument();
  });

  it('should render without description', () => {
    render(<SectionInfo title="Title" />);

    const element = screen.getByText('Title');
    expect(element).toBeInTheDocument();
  });
});
