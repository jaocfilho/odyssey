import { describe, it, expect, assertType } from 'vitest';

import { addCardToColumnUseCase } from '.';
import { generateRandomKanbanCardInput } from '../../entities/kanban-card/factories';
import {
  generateRandomKanbanColumn,
  KanbanColumn,
} from '../../entities/kanban-column';

describe('addCardToColumnUseCase', () => {
  it('should create and add a card to a given column', () => {
    const column = generateRandomKanbanColumn();
    const cardProps = generateRandomKanbanCardInput();

    const updatedColumn = addCardToColumnUseCase({ column, cardProps });

    const expectedCard = updatedColumn.cards.find((c) => c.id === cardProps.id);

    expect(expectedCard).toBeTruthy();
  });

  it('should return the updated kanban column', () => {
    const column = generateRandomKanbanColumn();
    const cardProps = generateRandomKanbanCardInput();

    const updatedColumn = addCardToColumnUseCase({ column, cardProps });

    assertType<KanbanColumn>(updatedColumn);
  });
});
