import { describe, expect, it, vi } from 'vitest';

import { kanbanCardSchema } from '../entity';
import { generateRandomKanbanCard } from '../factories';
import { createKanbanCard } from '.';

describe('createKanbanCard', () => {
  it('should return a valid kanban card when given valid input', () => {
    const cardProps = generateRandomKanbanCard();

    const parseSpy = vi.spyOn(kanbanCardSchema, 'parse');
    createKanbanCard({ cardProps });

    expect(parseSpy).toHaveBeenCalledWith(cardProps);

    parseSpy.mockRestore();
  });
});
