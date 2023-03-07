import { describe, it, expect, assertType } from 'vitest';

import { updateColumnUseCase } from '.';
import {
  generateRandomKanbanColumn,
  KanbanColumn,
} from '../../entities/kanban-column';

describe('updateColumnUseCase', () => {
  it('should return a kanban column', () => {
    const column = generateRandomKanbanColumn();
    const newColumnProps = { title: 'anyTitle' };

    const updateColumn = updateColumnUseCase({ column, newColumnProps });

    assertType<KanbanColumn>(updateColumn);
  });

  it('should update a column', () => {
    const column = generateRandomKanbanColumn();
    const newColumnProps = { title: 'anyTitle' };

    const updateColumn = updateColumnUseCase({ column, newColumnProps });

    expect(updateColumn.title).toEqual(newColumnProps.title);
  });
});
