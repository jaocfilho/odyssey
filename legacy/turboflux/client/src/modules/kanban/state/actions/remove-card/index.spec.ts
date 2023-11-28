import { describe, it, expect } from 'vitest';

import { removeCard } from '.';
import { generateRandomKanbanState } from '../../factories';

describe('removeCard', () => {
  it('should remove a card from a column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardId = column.cards[0].id;

    const payload = { cardId, column };

    removeCard(state, payload);

    const updatedColumn = state.board.columns[0];
    const isIncluded = updatedColumn.cards.find((card) => card.id === cardId);

    expect(isIncluded).toBeUndefined();
  });

  it('should have the correct amount of cards on the given column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardId = column.cards[0].id;

    const payload = { cardId, column };

    const initialLength = column.cards.length;
    removeCard(state, payload);

    const updatedColumn = state.board.columns[0];
    const updatedLength = updatedColumn.cards.length;

    expect(initialLength - 1).toEqual(updatedLength);
  });
});
