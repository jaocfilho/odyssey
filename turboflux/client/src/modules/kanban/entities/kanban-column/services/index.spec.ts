import { describe, expect, it, vi } from 'vitest';

import { KanbanColumn, kanbanColumnSchema } from '../entity';
import { generateRandomKanbanColumn } from '../factories';
import { generateRandomKanbanCard } from '../../kanban-card/factories';
import {
  addCardToKanbanColumn,
  createKanbanColumn,
  removeCardByIdFromKanbanColumn,
  updateKanbanColumn,
} from '.';

describe('createKanbanColumn', () => {
  it('should return a valid kanban column when given valid input', () => {
    const columnProps = generateRandomKanbanColumn();

    const parseSpy = vi.spyOn(kanbanColumnSchema, 'parse');
    createKanbanColumn({ columnProps });

    expect(parseSpy).toHaveBeenCalledWith(columnProps);

    parseSpy.mockRestore();
  });
});

describe('addCardToKanbanColumn', () => {
  it('should add a card to a column', () => {
    const column = generateRandomKanbanColumn();
    const card = generateRandomKanbanCard();

    const totalCards = column.cards.length;
    const newColumn = addCardToKanbanColumn({ column, card });

    const expected = totalCards + 1;
    expect(newColumn.cards).toHaveLength(expected);
  });

  it('should add the card to the end of the column', () => {
    const column = generateRandomKanbanColumn();
    const card = generateRandomKanbanCard();

    const newColumn = addCardToKanbanColumn({ column, card });
    const expected = newColumn.cards[newColumn.cards.length - 1];

    expect(card).toEqual(expected);
  });
});

describe('updateKanbanColumn', () => {
  it('should correctly update a column', () => {
    const column = generateRandomKanbanColumn();

    const newColumnProps = generateRandomKanbanCard() as Partial<KanbanColumn>;
    delete newColumnProps.id;

    const updatedColumn = updateKanbanColumn({ column, newColumnProps });
    expect(updatedColumn.id).toEqual(column.id);
    expect(updatedColumn.title).toEqual(newColumnProps.title);
  });
});

describe('removeCardByIdFromKanbanColumn', () => {
  it('should remove the correct card', () => {
    const column = generateRandomKanbanColumn();
    const card = column.cards[0];

    const updatedColumn = removeCardByIdFromKanbanColumn({
      column,
      cardId: card.id,
    });

    expect(updatedColumn.cards).not.toContain(card);
  });
});
