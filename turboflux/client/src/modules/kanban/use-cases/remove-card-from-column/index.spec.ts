import { describe, expect, it, assertType } from 'vitest';

import { removeCardFromColumnUseCase } from '.';
import {
  generateRandomKanbanColumn,
  KanbanColumn,
} from '../../entities/kanban-column';

describe('removeCardFromColumnUseCase', () => {
  it('should remove a card from the column given an id', () => {
    const column = generateRandomKanbanColumn();
    const cardToRemove = column.cards[0];

    const updatedColumn = removeCardFromColumnUseCase({
      column,
      cardId: cardToRemove.id,
    });

    const expected = updatedColumn.cards.find(
      (card) => card.id === cardToRemove.id
    );

    expect(expected).toBeUndefined();
  });

  it('should return a kanban column', () => {
    const column = generateRandomKanbanColumn();
    const cardToRemove = column.cards[0];

    const updatedColumn = removeCardFromColumnUseCase({
      column,
      cardId: cardToRemove.id,
    });

    assertType<KanbanColumn>(updatedColumn);
  });
});
