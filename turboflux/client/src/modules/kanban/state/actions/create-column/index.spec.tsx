import { describe, expect, it, vi } from 'vitest';

import { createColumn } from '.';
import { generateRandomKanbanBoard } from '../../../entities/kanban-board';
import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';

import { addColumnToBoardUseCase } from '../../../use-cases';

vi.mock('../../../use-cases', () => ({
  addColumnToBoardUseCase: vi.fn(),
}));

describe('createColumn', () => {
  it('should call addColumnToBoardUseCase', () => {
    const board = generateRandomKanbanBoard();
    const draft = { board };

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    createColumn(draft, payload);

    expect(addColumnToBoardUseCase).toHaveBeenCalledWith({
      board,
      columnProps,
    });
  });
});
