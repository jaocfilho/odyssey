import { describe, it, expect, vi } from 'vitest';

import { kanbanStateReducer } from '.';
import { generateRandomKanbanColumnInput } from '../../entities/kanban-column';
import { CreateColumnAction } from '../actions';
import { generateRandomKanbanState } from '../factories';
import { addColumn } from '../actions/add-column';

vi.mock('../actions/add-column', () => ({
  addColumn: vi.fn(),
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
});
