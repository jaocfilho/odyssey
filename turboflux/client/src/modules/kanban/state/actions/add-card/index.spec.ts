import { describe, it, expect } from 'vitest';

import { addCard } from '.';
import { generateRandomKanbanCardInput } from '../../../entities/kanban-card';
import { generateRandomKanbanState } from '../../factories';

describe('addCard', () => {
  it('should create a new card and add it to the end of a column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const columnId = column.id;
    const cardProps = generateRandomKanbanCardInput();
    const payload = { cardProps, columnId };

    addCard(state, payload);

    const updatedColumn = state.board.columns[0];

    const lastIndex = updatedColumn.cards.length - 1;
    const expectedCard = updatedColumn.cards[lastIndex];

    expect(expectedCard.id).toEqual(cardProps.id);
  });

  it('should have the correct amount of cards on the given column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const columnId = column.id;
    const cardProps = generateRandomKanbanCardInput();
    const payload = { cardProps, columnId };

    const initialLength = column.cards.length;
    addCard(state, payload);

    const updatedColumn = state.board.columns[0];
    const updatedLength = updatedColumn.cards.length;

    expect(initialLength + 1).toEqual(updatedLength);
  });
});
