import { describe, it, expect } from 'vitest';

import { changeColumnOrder } from '.';
import { generateRandomKanbanState } from '../../factories';

describe('changeColumnOrder', () => {
  it('should move a column inside a board', () => {
    const state = generateRandomKanbanState();

    const from = 0;
    const to = state.board.columns.length - 1;
    const payload = { from, to };

    const targetedColumn = state.board.columns[from];
    changeColumnOrder(state, payload);
    const expected = state.board.columns[to];

    expect(targetedColumn).toEqual(expected);
  });
});
