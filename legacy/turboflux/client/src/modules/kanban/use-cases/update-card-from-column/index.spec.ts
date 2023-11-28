import { assertType, describe, expect, it } from 'vitest';

import { updateCardFromColumnUseCase } from '.';
import { generateRandomKanbanCard } from '../../entities/kanban-card';
import {
  generateRandomKanbanColumn,
  KanbanColumn,
} from '../../entities/kanban-column';

describe('updateCardFromColumnUseCase', () => {
  it('should return a kanban column', () => {
    const column = generateRandomKanbanColumn();
    const cardId = column.cards[0].id;
    const { id, ...newCardProps } = generateRandomKanbanCard();

    const updatedColumn = updateCardFromColumnUseCase({
      column,
      cardId,
      newCardProps,
    });

    assertType<KanbanColumn>(updatedColumn);
  });

  it('should update a card from the column', () => {
    const column = generateRandomKanbanColumn();
    const cardId = column.cards[0].id;
    const { id, ...newCardProps } = generateRandomKanbanCard();

    const updatedColumn = updateCardFromColumnUseCase({
      column,
      cardId,
      newCardProps,
    });

    const updatedCard = updatedColumn.cards[0];
    expect(updatedCard.title).toEqual(newCardProps.title);
  });

  it('should return the same column if card is not found', () => {
    const column = generateRandomKanbanColumn();
    const cardId = 'anyId';
    const { id, ...newCardProps } = generateRandomKanbanCard();

    const updatedColumn = updateCardFromColumnUseCase({
      column,
      cardId,
      newCardProps,
    });

    expect(updatedColumn).toEqual(column);
  });
});
