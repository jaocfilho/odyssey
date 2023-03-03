import { describe, it, expect, vi } from 'vitest';

import { kanbanStateReducer } from '.';
import { generateRandomKanbanColumnInput } from '../../entities/kanban-column';
import { CreateColumnAction, RemoveColumnAction } from '../actions';
import { generateRandomKanbanState } from '../factories';
import { addColumn } from '../actions/add-column';
import { removeColumn } from '../actions/remove-column';

vi.mock('../actions/add-column', () => ({
  addColumn: vi.fn(),
}));

vi.mock('../actions/remove-column', () => ({
  removeColumn: vi.fn(),
}));

describe('kanbanStateReducer', () => {
  it('should call addColumn when action is ADD_COLUMN', () => {
    const draft = generateRandomKanbanState();
    const columnProps = generateRandomKanbanColumnInput();

    const action: CreateColumnAction = {
      type: 'ADD_COLUMN',
      payload: { columnProps },
    };

    kanbanStateReducer(draft, action);

    expect(addColumn).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call removeColumn when action is REMOVE_COLUMN', () => {
    const draft = generateRandomKanbanState();

    const action: RemoveColumnAction = {
      type: 'REMOVE_COLUMN',
      payload: { columnId: 'any' },
    };

    kanbanStateReducer(draft, action);

    expect(removeColumn).toHaveBeenCalledWith(draft, action.payload);
  });
});
