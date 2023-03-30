import { describe, it, expect } from 'vitest';

import { generateRandomKanbanState } from '../../factories';
import { changeCardOrder } from '.';

describe('changeCardOrder', () => {
  it('should move a card from one index to another', () => {
    const state = generateRandomKanbanState();
    const column = state.board.columns[0];
    const columnId = column.id;

    const from = 0;
    const to = column.cards.length - 1;

    changeCardOrder(state, { columnId, from, to });

    const updatedColumn = state.board.columns[0];

    expect(column.cards[from]).toEqual(updatedColumn.cards[to]);
  });

  it('should return the same column if both indexes are the same', () => {
    const state = generateRandomKanbanState();
    const column = state.board.columns[0];
    const columnId = column.id;

    const from = 0;
    const to = 0;

    changeCardOrder(state, { columnId, from, to });

    const updatedColumn = state.board.columns[0];

    expect(column).toEqual(updatedColumn);
  });
});
