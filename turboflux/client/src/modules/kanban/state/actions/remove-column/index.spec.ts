import { describe, it, expect, assertType } from 'vitest';

import { removeColumn } from '.';
import { generateRandomKanbanState } from '../../factories';
import { KanbanState } from '../../reducer';

describe('removeColumn', () => {
  it('should return the kanban state', () => {
    const draft = generateRandomKanbanState();
    const columnToRemove = draft.board.columns[0];
    const payload = { columnId: columnToRemove.id };

    const nextState = removeColumn(draft, payload);

    assertType<KanbanState>(nextState);
  });

  it('should remove a column from the board', () => {
    const draft = generateRandomKanbanState();
    const columnToRemove = draft.board.columns[0];
    const payload = { columnId: columnToRemove.id };

    const nextState = removeColumn(draft, payload);

    const expected = nextState.board.columns.find(
      (column) => column.id === columnToRemove.id
    );

    expect(expected).toBeUndefined();
  });
});
