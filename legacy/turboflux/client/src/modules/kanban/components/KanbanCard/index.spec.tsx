import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { KanbanCard } from '.';

describe('KanbanCard', () => {
  it('should render', () => {
    const title = 'anyTitle';
    render(<KanbanCard title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
