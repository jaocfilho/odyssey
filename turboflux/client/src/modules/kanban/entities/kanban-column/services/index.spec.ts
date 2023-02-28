import { describe, expect, it, vi } from 'vitest';

import { kanbanColumnSchema } from '../entity';
import { generateRandomKanbanColumn } from '../factories';
import { generateRandomKanbanCard } from '../../kanban-card/factories';
import { addCardToKanbanColumn, createKanbanColumn } from '.';

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
