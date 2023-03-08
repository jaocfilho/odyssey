import { describe, it, expect, assertType } from 'vitest';

import { updateColumnFromBoardUseCase } from '.';
import {
  generateRandomKanbanBoard,
  KanbanBoard,
} from '../../entities/kanban-board';

describe('updateColumnFromBoardUseCase', () => {
  it('should return a kanban board', () => {
    const board = generateRandomKanbanBoard();
    const columnId = board.columns[0].id;
    const newColumnProps = { title: 'anyTitle' };

    const updatedBoard = updateColumnFromBoardUseCase({
      board,
      columnId,
      newColumnProps,
    });

    assertType<KanbanBoard>(updatedBoard);
  });

  it('should update a column from the board', () => {
    const board = generateRandomKanbanBoard();
    const columnId = board.columns[0].id;
    const newColumnProps = { title: 'anyTitle' };

    const updatedBoard = updateColumnFromBoardUseCase({
      board,
      columnId,
      newColumnProps,
    });

    const expectedColumn = updatedBoard.columns[0];

    expect(expectedColumn.title).toEqual(newColumnProps.title);
  });

  it('should return the same board if column does not belongs to it', () => {
    const board = generateRandomKanbanBoard();
    const columnId = board.columns[0].id;
    const newColumnProps = { title: 'anyTitle' };

    const updatedBoard = updateColumnFromBoardUseCase({
      board,
      columnId,
      newColumnProps,
    });

    expect(updatedBoard).toEqual(board);
  });
});
