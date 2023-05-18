import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { DescriptionListHeader } from '.';

describe('DescriptionListHeader', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders header text correctly', () => {
    const headerText = 'Header Text';
    render(<DescriptionListHeader header={headerText} />);

    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders subheader text correctly when provided', () => {
    const headerText = 'Header Text';
    const subHeaderText = 'Subheader Text';
    render(
      <DescriptionListHeader header={headerText} subHeader={subHeaderText} />
    );

    const subHeaderElement = screen.getByText(subHeaderText);
    expect(subHeaderElement).toBeInTheDocument();
  });

  it('does not render subheader when not provided', () => {
    const headerText = 'Header Text';
    render(<DescriptionListHeader header={headerText} />);

    const subHeaderElement = screen.queryByRole('paragraph');
    expect(subHeaderElement).not.toBeInTheDocument();
  });
});
