import { describe, expect, it, vi } from 'vitest';

import { kanbanBoardSchema } from '../entity';
import { addColumn, createKanbanBoard, moveColumn, removeColumnById } from '.';
import {
  generateRandomKanbanBoard,
  generateRandomKanbanBoardInput,
} from '../factories';
import {
  generateRandomKanbanColumn,
  generateRandomKanbanColumnArray,
} from '../../kanban-column/factories';

describe('createKanbanBoard', () => {
  it('should return a valid kanban board when given valid input', () => {
    const boardProps = generateRandomKanbanBoardInput();

    const parseSpy = vi.spyOn(kanbanBoardSchema, 'parse');
    createKanbanBoard({ boardProps });

    expect(parseSpy).toHaveBeenCalledWith(boardProps);

    parseSpy.mockRestore();
  });
});

describe('addColumn', () => {
  it('should add a column to a board', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const totalColumns = board.columns.length;
    const updatedBoard = addColumn({ board, column });

    const expected = totalColumns + 1;
    expect(updatedBoard.columns).toHaveLength(expected);
  });

  it('should add the column to the end of the board', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const updatedBoard = addColumn({ board, column });
    const expected = updatedBoard.columns[updatedBoard.columns.length - 1];

    expect(column).toEqual(expected);
  });

  it('should return the same board if column is duplicated', () => {
    const board = generateRandomKanbanBoard();
    const column = board.columns[0];

    const updatedBoard = addColumn({ board, column });

    expect(updatedBoard).toEqual(board);
  });
});

describe('removeColumnById', () => {
  it('should remove the correct column', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const updatedBoard = removeColumnById({
      board,
      columnId: column.id,
    });

    expect(updatedBoard.columns).not.toContain(column);
  });

  it('should return the same board if the column is not found', () => {
    const board = generateRandomKanbanBoard();

    const updatedBoard = removeColumnById({
      board,
      columnId: 'any',
    });

    expect(updatedBoard).toEqual(board);
  });
});

describe('moveColumn', () => {
  it('should move a column from one index to another', () => {
    const columns = generateRandomKanbanColumnArray({ columns: 5 });
    const board = generateRandomKanbanBoard({ columns });

    const from = 1;
    const to = 3;

    const updatedBoard = moveColumn({ board, from, to });

    expect(updatedBoard.columns.length).toEqual(board.columns.length);
    expect(updatedBoard.columns[3]).toEqual(board.columns[1]);
  });

  it('should return the same board if indexes are the same', () => {
    const columns = generateRandomKanbanColumnArray({ columns: 5 });
    const board = generateRandomKanbanBoard({ columns });

    const from = 2;
    const to = 2;

    const updatedBoard = moveColumn({ board, from, to });

    expect(updatedBoard).toEqual(board);
  });
});
