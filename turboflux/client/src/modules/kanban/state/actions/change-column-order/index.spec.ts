import { describe, it, assertType, expect } from 'vitest';

import { changeColumnOrder } from '.';
import { generateRandomKanbanState } from '../../factories';
import { KanbanState } from '../../reducer';

describe('changeColumnOrder', () => {
  it('should return a kanban state', () => {
    const state = generateRandomKanbanState();

    const from = 0;
    const to = state.board.columns.length - 1;
    const payload = { from, to };

    const nextState = changeColumnOrder(state, payload);

    assertType<KanbanState>(nextState);
  });

  it('should move a column inside a board', () => {
    const state = generateRandomKanbanState();

    const from = 0;
    const to = state.board.columns.length - 1;
    const payload = { from, to };

    const targetedColumn = state.board.columns[from];
    const nextState = changeColumnOrder(state, payload);
    const expected = nextState.board.columns[to];

    expect(targetedColumn).toEqual(expected);
  });
});
