import { describe, it, expect, vi } from 'vitest';

import { kanbanStateReducer } from '.';
import { generateRandomKanbanColumnInput } from '../../entities/kanban-column';
import { CreateColumnAction } from '../actions';
import { generateRandomKanbanState } from '../factories';
import { createColumn } from '../actions/create-column';

vi.mock('../actions/create-column', () => ({
  createColumn: vi.fn(),
}));

describe('kanbanStateReducer', () => {
  it('should call createColumn when action is CREATE_COLUMN', () => {
    const draft = generateRandomKanbanState();
    const columnProps = generateRandomKanbanColumnInput();

    const action: CreateColumnAction = {
      type: 'CREATE_COLUMN',
      payload: { columnProps },
    };

    kanbanStateReducer(draft, action);

    expect(createColumn).toHaveBeenCalledWith(draft, action.payload);
  });
});
