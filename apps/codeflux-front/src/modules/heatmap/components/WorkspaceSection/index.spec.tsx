import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { WorkspaceSection } from '.';

describe('WorkspaceSection', () => {
  it('should render the repository name as text', () => {
    const repository = 'test-repo';
    render(<WorkspaceSection repository={repository} />);
    expect(screen.getByText(repository)).toBeInTheDocument();
  });
});
