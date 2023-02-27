import { render } from '@testing-library/react';

import { describe, expect, it, vi } from 'vitest';

import { KanbanCard } from '../KanbanCard';
import { KanbanCards, KanbanCardsProps } from '.';

vi.mock('../KanbanCard', () => ({
  KanbanCard: vi.fn(() => null),
}));

describe('KanbanCards', () => {
  const title = 'anyTitle';

  const props: KanbanCardsProps = {
    cards: [{ title }, { title }, { title }],
  };

  it('should call a KanbanCard component for each card', () => {
    render(<KanbanCards {...props} />);

    expect(KanbanCard).toHaveBeenCalledTimes(props.cards.length);
  });
});
