import { describe, expect, it } from 'vitest';

import { addColumn } from '.';
import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../factories';

describe('addColumn', () => {
  it('should create a new column and add it to the state board', () => {
    const state = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    addColumn(state, payload);

    const expectedColumn = state.board.columns.find(
      (column) => column.id === columnProps.id
    );

    expect(expectedColumn).toBeTruthy();
  });
});
