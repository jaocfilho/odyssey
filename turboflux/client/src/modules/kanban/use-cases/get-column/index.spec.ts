import { describe, it } from 'vitest';

import { getColumnUseCase } from '.';
import { generateRandomKanbanBoard } from '../../entities/kanban-board';

describe('getColumnUseCase', () => {
  it('should return a column if it belongs to the board', () => {
    const board = generateRandomKanbanBoard();
    const columnId = board.columns[0].id;

    const expected = getColumnUseCase({ board, columnId });

    expect(expected).toBeTruthy();
    expect(expected?.column.id).toEqual(columnId);
  });

  it('should return a column index if it belongs to the board', () => {
    const board = generateRandomKanbanBoard();
    const columnId = board.columns[0].id;

    const expected = getColumnUseCase({ board, columnId });

    expect(expected).toBeTruthy();
    expect(expected?.index).toEqual(0);
  });

  it('should return undefined if the id does not belongs to the board', () => {
    const board = generateRandomKanbanBoard();
    const columnId = 'anyId';

    const expected = getColumnUseCase({ board, columnId });

    expect(expected).toBeUndefined();
  });
});
