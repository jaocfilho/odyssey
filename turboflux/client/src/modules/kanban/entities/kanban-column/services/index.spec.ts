import { describe, expect, it, vi } from 'vitest';

import { kanbanColumnSchema } from '../entity';
import { generateRandomKanbanColumn } from '../factories';
import { createKanbanColumn } from '.';

describe('createKanbanColumn', () => {
  it('should return a valid kanban column when given valid input', () => {
    const columnProps = generateRandomKanbanColumn();

    const parseSpy = vi.spyOn(kanbanColumnSchema, 'parse');
    createKanbanColumn({ columnProps });

    expect(parseSpy).toHaveBeenCalledWith(columnProps);

    parseSpy.mockRestore();
  });
});
