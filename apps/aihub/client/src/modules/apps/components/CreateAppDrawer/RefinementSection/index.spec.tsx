import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { RefinementSection } from '.';

describe('RefinementSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the children components', () => {
    render(
      <RefinementSection>
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </RefinementSection>
    );

    const childComponent1 = screen.getByText('Child Component 1');
    const childComponent2 = screen.getByText('Child Component 2');

    expect(childComponent1).toBeInTheDocument();
    expect(childComponent2).toBeInTheDocument();
  });

  it('renders the section title and description', () => {
    render(
      <RefinementSection>
        <div>Child Component</div>
      </RefinementSection>
    );

    const sectionTitle = screen.getByText('Refinement');
    const sectionDescription = screen.getByText('Refine your app.');

    expect(sectionTitle).toBeInTheDocument();
    expect(sectionDescription).toBeInTheDocument();
  });
});
