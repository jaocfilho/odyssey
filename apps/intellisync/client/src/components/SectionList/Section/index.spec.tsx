import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Section } from '.';

describe('Section', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the title', () => {
    render(<Section title="Section title">section</Section>);
    expect(screen.getByText('Section title')).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(
      <Section title="Section title" description="Section description">
        section
      </Section>
    );
    expect(screen.getByText('Section description')).toBeInTheDocument();
  });

  it('should render the children', () => {
    render(<Section title="Section title">section</Section>);
    expect(screen.getByText('section')).toBeInTheDocument();
  });
});
