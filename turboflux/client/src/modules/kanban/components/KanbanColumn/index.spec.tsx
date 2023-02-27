import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { KanbanColumn } from '.';

describe('KanbanColumn', () => {
  it('should render', () => {
    const title = 'columnTitle';
    render(<KanbanColumn title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
