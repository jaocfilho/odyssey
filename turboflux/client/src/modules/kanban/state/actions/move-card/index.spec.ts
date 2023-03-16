import { describe, it, expect } from 'vitest';

import { moveCard, MoveCardPayload } from '.';
import { generateRandomKanbanState } from '../../factories';

describe('moveCard', () => {
  it('should move a card from one column to another', () => {
    const state = generateRandomKanbanState();

    const originColumnIndex = 0;
    const originColumn = state.board.columns[originColumnIndex];

    const targetColumnIndex = state.board.columns.length - 1;
    const targetColumn = state.board.columns[targetColumnIndex];

    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const payload: MoveCardPayload = {
      cardId,
      originColumnIndex,
      targetColumnIndex,
      targetIndex,
    };

    moveCard(state, payload);
  });
});
