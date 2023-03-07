import { describe, assertType, it, expect } from 'vitest';

import { moveColumnUseCase } from '.';
import {
  generateRandomKanbanBoard,
  KanbanBoard,
} from '../../entities/kanban-board';
import { generateRandomKanbanColumnArray } from '../../entities/kanban-column';

describe('moveColumnUseCase', () => {
  it('should move a column from one index to another', () => {
    const columns = generateRandomKanbanColumnArray({ columns: 5 });
    const board = generateRandomKanbanBoard({ columns });

    const from = 1;
    const to = 3;

    const updatedBoard = moveColumnUseCase({
      board,
      from,
      to,
    });

    expect(updatedBoard.columns.length).toEqual(board.columns.length);
    expect(updatedBoard.columns[3]).toEqual(board.columns[1]);
  });

  it('should return a kanban board', () => {
    const columns = generateRandomKanbanColumnArray({ columns: 5 });
    const board = generateRandomKanbanBoard({ columns });

    const from = 1;
    const to = 3;

    const updatedBoard = moveColumnUseCase({
      board,
      from,
      to,
    });

    assertType<KanbanBoard>(updatedBoard);
  });
});
