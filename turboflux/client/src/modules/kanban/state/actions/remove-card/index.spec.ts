import { assertType, describe, it, expect } from 'vitest';

import { removeCard } from '.';
import { generateRandomKanbanState } from '../../factories';
import { KanbanState } from '../../reducer';

describe('removeCard', () => {
  it('should return a kanban state', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardId = column.cards[0].id;

    const payload = { cardId, column };

    const nextState = removeCard(state, payload);

    assertType<KanbanState>(nextState);
  });

  it('should remove a card from a column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardId = column.cards[0].id;

    const payload = { cardId, column };

    const nextState = removeCard(state, payload);

    const updatedColumn = nextState.board.columns[0];
    const isIncluded = updatedColumn.cards.find((card) => card.id === cardId);

    expect(isIncluded).toBeUndefined();
  });

  it('should have the correct amount of cards on the given column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardId = column.cards[0].id;

    const payload = { cardId, column };

    const initialLength = column.cards.length;
    const nextState = removeCard(state, payload);

    const updatedColumn = nextState.board.columns[0];
    const updatedLength = updatedColumn.cards.length;

    expect(initialLength - 1).toEqual(updatedLength);
  });
});
