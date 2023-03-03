import { describe, it, expect } from 'vitest';

import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../../state';
import { reducer } from '.';

describe('reducer', () => {
  it('should add a column to the board when action is CREATE_COLUMN', () => {
    const draft = generateRandomKanbanState();
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
});
