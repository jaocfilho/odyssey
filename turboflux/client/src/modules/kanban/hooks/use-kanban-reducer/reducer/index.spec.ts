import { describe, it, expect } from 'vitest';

import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../../state';
import { reducer } from '.';

describe('reducer', () => {
  const draft = generateRandomKanbanState();

  it('should add a column to the board when action is CREATE_COLUMN', () => {
    const columnProps = generateRandomKanbanColumnInput();

    const nextState = reducer(draft, {
      type: 'CREATE_COLUMN',
      payload: { columnProps },
    });

    const expectedColumn = nextState.board.columns.find(
      (column) => column.id === columnProps.id
    );

    expect(expectedColumn).toBeTruthy();
  });

  it('should remove a column from the board when action is REMOVE_COLUMN', () => {
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
});
