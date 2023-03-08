import { describe, it, assertType, expect } from 'vitest';

import { addCard } from '.';
import { generateRandomKanbanCardInput } from '../../../entities/kanban-card';
import { generateRandomKanbanState } from '../../factories';
import { KanbanState } from '../../reducer';

describe('addCard', () => {
  it('should return a kanban state', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardProps = generateRandomKanbanCardInput();
    const payload = { cardProps, column };

    const nextState = addCard(state, payload);

    assertType<KanbanState>(nextState);
  });

  it('should create a new card and add it to the end of a column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardProps = generateRandomKanbanCardInput();
    const payload = { cardProps, column };

    const nextState = addCard(state, payload);

    const lastIndex = nextState.board.columns.length - 1;
    const expectedCard = nextState.board.columns[lastIndex];

    expect(expectedCard.id).toEqual(cardProps.id);
  });

  it('should have the correct amount of cards on the given column', () => {
    const state = generateRandomKanbanState();

    const column = state.board.columns[0];
    const cardProps = generateRandomKanbanCardInput();
    const payload = { cardProps, column };

    const nextState = addCard(state, payload);

    expect(nextState.board.columns.length).toEqual(
      state.board.columns.length + 1
    );
  });
});
