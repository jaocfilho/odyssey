import { describe, it, expect } from 'vitest';

import { moveCard, MoveCardPayload } from '.';
import { generateRandomKanbanBoard } from '../../../entities/kanban-board';
import { generateRandomKanbanState } from '../../factories';

describe('moveCard', () => {
  it('should move a card from one column to another', () => {
    const board = generateRandomKanbanBoard({ columnsLength: 5 });
    const state = generateRandomKanbanState({ board });

    const originColumn = state.board.columns[0];
    const originColumnId = originColumn.id;

    const lastIndex = state.board.columns.length - 1;
    const targetColumn = state.board.columns[lastIndex];
    const targetColumnId = targetColumn.id;

    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const payload: MoveCardPayload = {
      cardId,
      originColumnId,
      targetColumnId,
      targetIndex,
    };

    moveCard(state, payload);

    const updatedOrigin = state.board.columns[0];
    const updatedTarget = state.board.columns[lastIndex];

    const expectUndefined = updatedOrigin.cards.find(
      (card) => card.id === cardId
    );

    const expected = updatedTarget.cards.find((card) => card.id === cardId);

    expect(expectUndefined).toBeUndefined();
    expect(expected).toBeTruthy();
  });

  it('should not change the state if originColumnId is not on the board', () => {
    const board = generateRandomKanbanBoard({ columnsLength: 5 });
    const state = generateRandomKanbanState({ board });

    const originColumnId = 'anyId';

    const lastIndex = state.board.columns.length - 1;
    const targetColumn = state.board.columns[lastIndex];
    const targetColumnId = targetColumn.id;

    const cardId = targetColumn.cards[0].id;
    const targetIndex = 0;

    const payload: MoveCardPayload = {
      cardId,
      originColumnId,
      targetColumnId,
      targetIndex,
    };

    moveCard(state, payload);

    // asserts that the card is still on the last column
    const updatedTarget = state.board.columns[lastIndex];
    const expected = updatedTarget.cards.find((card) => card.id === cardId);

    expect(expected).toBeTruthy();
  });

  it('should not change the state if targetColumnId is not on the board', () => {
    const board = generateRandomKanbanBoard({ columnsLength: 5 });
    const state = generateRandomKanbanState({ board });

    const originColumn = state.board.columns[0];
    const originColumnId = originColumn.id;

    const targetColumnId = 'anyId';

    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const payload: MoveCardPayload = {
      cardId,
      originColumnId,
      targetColumnId,
      targetIndex,
    };

    moveCard(state, payload);

    // asserts that the card is still on the origin column
    const updatedOrigin = state.board.columns[0];
    const expected = updatedOrigin.cards.find((card) => card.id === cardId);

    expect(expected).toBeTruthy();
  });

  it('should not update if card id is not on the board', () => {
    const board = generateRandomKanbanBoard({ columnsLength: 5 });
    const state = generateRandomKanbanState({ board });

    const originColumn = state.board.columns[0];
    const originColumnId = originColumn.id;

    const lastIndex = state.board.columns.length - 1;
    const targetColumn = state.board.columns[lastIndex];
    const targetColumnId = targetColumn.id;

    const cardId = 'anyId';
    const targetIndex = 0;

    const payload: MoveCardPayload = {
      cardId,
      originColumnId,
      targetColumnId,
      targetIndex,
    };

    moveCard(state, payload);

    const updatedOrigin = state.board.columns[0];
    const updatedTarget = state.board.columns[lastIndex];

    expect(originColumn).toEqual(updatedOrigin);
    expect(targetColumn).toEqual(updatedTarget);
  });
});
