import { describe, expect, it, vi } from 'vitest';

import { kanbanBoardSchema } from '../entity';
import { addColumnToKanbanBoard, createKanbanBoard } from '.';

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

describe('addColumnToKanbanBoard', () => {
  it('should add a card to a column', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const totalColumns = board.columns.length;
    const updatedBoard = addColumnToKanbanBoard({ board, column });

    const expected = totalColumns + 1;
    expect(updatedBoard.columns).toHaveLength(expected);
  });

  it('should add the card to the end of the column', () => {
    const board = generateRandomKanbanBoard();
    const column = generateRandomKanbanColumn();

    const updatedBoard = addColumnToKanbanBoard({ board, column });
    const expected = updatedBoard.columns[updatedBoard.columns.length - 1];

    expect(column).toEqual(expected);
  });
});
