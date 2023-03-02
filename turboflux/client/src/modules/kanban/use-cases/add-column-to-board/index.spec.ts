import { describe, it } from 'vitest';
import { addColumnToBoardUseCase } from '.';
import { generateRandomKanbanBoard } from '../../entities/kanban-board';
import { generateRandomKanbanColumnInput } from '../../entities/kanban-column';

describe('addColumnToBoardUseCase', () => {
  it('should create and add a new column on the board', () => {
    const board = generateRandomKanbanBoard({ columns: [] });
    const columnProps = generateRandomKanbanColumnInput();

    const updatedBoard = addColumnToBoardUseCase({
      board,
      columnProps,
    });

    const column = updatedBoard.columns[0];
    expect(column.id).toEqual(columnProps.id);
  });
});
