import { describe, expect, it } from 'vitest';

import { updateCard } from '.';
import { generateRandomKanbanCard } from '../../../entities/kanban-card';
import { generateRandomKanbanState } from '../../factories';

describe('updateCard', () => {
  it('should update a card from a column', () => {
    const state = generateRandomKanbanState();
    const columnId = state.board.columns[0].id;
    const cardId = state.board.columns[0].cards[0].id;
    const { id, ...newCardProps } = generateRandomKanbanCard();

    updateCard(state, { cardId, columnId, newCardProps });

    const updatedCard = state.board.columns[0].cards[0];
    expect(updatedCard.title).toBe(newCardProps.title);
  });

  it('should not modify the state if column doesnt belong to the board', () => {
    const state = generateRandomKanbanState();
    const columnId = 'anyId';
    const cardId = state.board.columns[0].cards[0].id;
    const { id, ...newCardProps } = generateRandomKanbanCard();

    const initialState = state;

    updateCard(state, { cardId, columnId, newCardProps });

    expect(initialState).toEqual(state);
  });
});
