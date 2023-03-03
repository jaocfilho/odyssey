import { describe, expect, it, assertType } from 'vitest';

import { removeColumnFromBoardUseCase } from '.';
import {
  generateRandomKanbanBoard,
  KanbanBoard,
} from '../../entities/kanban-board';

describe('removeColumnFromBoardUseCase', () => {
  it('should remove a column from the board given a id', () => {
    const board = generateRandomKanbanBoard();
    const columnToRemove = board.columns[0];

    const updatedBoard = removeColumnFromBoardUseCase({
      board,
      columnId: columnToRemove.id,
    });

    const expected = updatedBoard.columns.find(
      (column) => column.id === columnToRemove.id
    );

    expect(expected).toBeUndefined();
  });

  it('should return a kanban board', () => {
    const board = generateRandomKanbanBoard();
    const columnToRemove = board.columns[0];

    const updatedBoard = removeColumnFromBoardUseCase({
      board,
      columnId: columnToRemove.id,
    });

    assertType<KanbanBoard>(updatedBoard);
  });
});
