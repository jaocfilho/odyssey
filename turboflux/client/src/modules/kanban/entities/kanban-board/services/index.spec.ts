import { describe, expect, it, vi } from 'vitest';

import { kanbanBoardSchema } from '../entity';
import { createKanbanBoard } from '.';

import { generateRandomKanbanBoardInput } from '../factories';

describe('createKanbanBoard', () => {
  it('should return a valid kanban board when given valid input', () => {
    const boardProps = generateRandomKanbanBoardInput();

    const parseSpy = vi.spyOn(kanbanBoardSchema, 'parse');
    createKanbanBoard({ boardProps });

    expect(parseSpy).toHaveBeenCalledWith(boardProps);

    parseSpy.mockRestore();
  });
});
