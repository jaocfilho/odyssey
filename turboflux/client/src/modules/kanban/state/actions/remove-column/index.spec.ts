import { describe, it, expect } from 'vitest';

import { removeColumn } from '.';
import { generateRandomKanbanState } from '../../factories';

describe('removeColumn', () => {
  it('should remove a column from the board', () => {
    const state = generateRandomKanbanState();
    const columnToRemove = state.board.columns[0];
    const payload = { columnId: columnToRemove.id };

    removeColumn(state, payload);

    const expected = state.board.columns.find(
      (column) => column.id === columnToRemove.id
    );

    expect(expected).toBeUndefined();
  });
});
