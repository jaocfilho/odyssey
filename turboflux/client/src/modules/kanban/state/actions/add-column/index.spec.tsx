import { describe, expect, it, assertType } from 'vitest';

import { addColumn } from '.';
import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../factories';
import { KanbanState } from '../../reducer';

describe('addColumn', () => {
  it('should return the kanban state', () => {
    const state = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    const nextState = addColumn(state, payload);

    assertType<KanbanState>(nextState);
  });

  it('should create a new column and add it to the state board', () => {
    const state = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    const nextState = addColumn(state, payload);

    const expectedColumn = nextState.board.columns.find(
      (column) => column.id === columnProps.id
    );

    expect(expectedColumn).toBeTruthy();
  });
});
