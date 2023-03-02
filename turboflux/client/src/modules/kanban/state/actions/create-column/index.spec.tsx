import { describe, expect, it, vi } from 'vitest';

import { createColumn } from '.';
import { generateRandomKanbanColumnInput } from '../../../entities/kanban-column';
import { addColumnToBoardUseCase } from '../../../use-cases';
import { generateRandomKanbanState } from '../../factories';

vi.mock('../../../use-cases', () => ({
  addColumnToBoardUseCase: vi.fn(),
}));

describe('createColumn', () => {
  it('should call addColumnToBoardUseCase', () => {
    const draft = generateRandomKanbanState();

    const columnProps = generateRandomKanbanColumnInput();
    const payload = { columnProps };

    createColumn(draft, payload);

    expect(addColumnToBoardUseCase).toHaveBeenCalledWith({
      board: draft.board,
      columnProps,
    });
  });
});
