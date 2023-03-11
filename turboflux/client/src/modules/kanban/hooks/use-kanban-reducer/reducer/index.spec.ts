import { describe, it, expect } from 'vitest';

import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../../state';
import { reducer } from '.';
import { generateRandomKanbanCardInput } from '../../../entities/kanban-card';

describe('reducer', () => {
  it('should add a column to the board when action is ADD_COLUMN', () => {
    const draft = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();

    const nextState = reducer(draft, {
      type: 'ADD_COLUMN',
      payload: { columnProps },
    });

    const expectedColumn = nextState.board.columns.find(
      (column) => column.id === columnProps.id
    );

    expect(expectedColumn).toBeTruthy();
  });

  it('should remove a column from the board when action is REMOVE_COLUMN', () => {
    const draft = generateRandomKanbanState();

    const columnToRemove = draft.board.columns[0];

    const nextState = reducer(draft, {
      type: 'REMOVE_COLUMN',
      payload: { columnId: columnToRemove.id },
    });

    const expected = nextState.board.columns.find(
      (column) => column.id === columnToRemove.id
    );

    expect(expected).toBeUndefined();
  });

  it('should add a card to a column on the board when the action is ADD_CARD', () => {
    const draft = generateRandomKanbanState();

    const column = draft.board.columns[0];
    const cardProps = generateRandomKanbanCardInput();
    const payload = { cardProps, column };

    const nextState = reducer(draft, {
      type: 'ADD_CARD',
      payload,
    });

    const updatedColumn = nextState.board.columns[0];

    const lastIndex = updatedColumn.cards.length - 1;
    const expectedCard = updatedColumn.cards[lastIndex];

    expect(expectedCard.id).toEqual(cardProps.id);
  });

  it('should remove a card from a column on the board when the action is REMOVE_CARD', () => {
    const draft = generateRandomKanbanState();

    const column = draft.board.columns[0];
    const cardId = column.cards[0].id;

    const payload = { cardId, column };

    const nextState = reducer(draft, {
      type: 'REMOVE_CARD',
      payload,
    });

    const updatedColumn = nextState.board.columns[0];
    const isIncluded = updatedColumn.cards.find((card) => card.id === cardId);

    expect(isIncluded).toBeUndefined();
  });

  it('should move a column from the board when the action is CHANGE_COLUMN_ORDER', () => {
    const draft = generateRandomKanbanState();

    const from = 0;
    const to = draft.board.columns.length - 1;
    const payload = { from, to };

    const targetedColumn = draft.board.columns[from];
    const nextState = reducer(draft, {
      type: 'CHANGE_COLUMN_ORDER',
      payload,
    });

    const expected = nextState.board.columns[to];

    expect(targetedColumn).toEqual(expected);
  });
});
