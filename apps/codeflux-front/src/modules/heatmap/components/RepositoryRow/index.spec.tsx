import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { RepositoryRow } from '.';

describe('RepositoryRow', () => {
  it('should render the repository name as text', () => {
    const repository = 'test-repo';
    render(<RepositoryRow repository={repository} />);
    expect(screen.getByText(repository)).toBeInTheDocument();
  });
});
