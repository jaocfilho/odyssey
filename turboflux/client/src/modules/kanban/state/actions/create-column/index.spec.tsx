import { describe, expect, it, assertType } from 'vitest';

import { createColumn } from '.';
import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../factories';
import { KanbanState } from '../../reducer';

describe('createColumn', () => {
  it('should return the kanban state', () => {
    const draft = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    const nextState = createColumn(draft, payload);

    assertType<KanbanState>(nextState);
  });

  it('should create a new column and add it to the draft board', () => {
    const draft = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    const nextState = createColumn(draft, payload);

    const expectedColumn = nextState.board.columns.find(
      (column) => column.id === columnProps.id
    );

    expect(expectedColumn).toBeTruthy();
  });
});
