import { describe, it, expect } from 'vitest';
import { updateColumn } from '.';

import { generateRandomKanbanColumn } from '../../../entities/kanban-column';
import { generateRandomKanbanState } from '../../factories';

describe('updateColumn', () => {
  it('should update a colunn from the board', () => {
    const state = generateRandomKanbanState();
    const columnId = state.board.columns[0].id;
    const { id, ...newColumnProps } = generateRandomKanbanColumn();

    updateColumn(state, { columnId, newColumnProps });

    const updatedColumn = state.board.columns[0];
    expect(updatedColumn.title).toBe(newColumnProps.title);
  });

  it('should not modify the state if column doesnt belong to the board', () => {
    const state = generateRandomKanbanState();
    const columnId = 'anyId';
    const { id, ...newColumnProps } = generateRandomKanbanColumn();

    const initialState = state;

    updateColumn(state, { columnId, newColumnProps });

    expect(initialState).toEqual(state);
  });
});
