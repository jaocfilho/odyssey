import { describe, expect, it, vi } from 'vitest';

import { kanbanBoardSchema } from '../entity';
import { addColumn, createKanbanBoard, removeColumnById } from '.';
import {
  generateRandomKanbanBoard,
  generateRandomKanbanBoardInput,
} from '../factories';
import { generateRandomKanbanColumn } from '../../kanban-column/factories';

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
  it('should add a card to a column', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const totalColumns = board.columns.length;
    const updatedBoard = addColumn({ board, column });

    const expected = totalColumns + 1;
    expect(updatedBoard.columns).toHaveLength(expected);
  });

  it('should add the card to the end of the column', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const updatedBoard = addColumn({ board, column });
    const expected = updatedBoard.columns[updatedBoard.columns.length - 1];

    expect(column).toEqual(expected);
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
