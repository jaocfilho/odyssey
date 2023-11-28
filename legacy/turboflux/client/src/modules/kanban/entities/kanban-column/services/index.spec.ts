import { describe, expect, it, vi, assertType } from 'vitest';

import { KanbanColumn, kanbanColumnSchema } from '../entity';
import {
  generateRandomKanbanColumn,
  generateRandomKanbanColumnArray,
  generateRandomKanbanColumnInput,
} from '../factories';
import { generateRandomKanbanCard } from '../../kanban-card/factories';
import {
  addCard,
  createKanbanColumn,
  getColumnById,
  changeCardOrder,
  removeCardById,
  updateKanbanColumn,
} from '.';

describe('createKanbanColumn', () => {
  it('should return a valid kanban column when given valid input', () => {
    const columnProps = generateRandomKanbanColumnInput();

    const parseSpy = vi.spyOn(kanbanColumnSchema, 'parse');
    createKanbanColumn({ columnProps });

    expect(parseSpy).toHaveBeenCalledWith(columnProps);
  });
});

describe('addCard', () => {
  it('should return a column', () => {
    const column = generateRandomKanbanColumn();
    const card = generateRandomKanbanCard();

    const updatedColumn = addCard({ column, card });

    assertType<KanbanColumn>(updatedColumn);
  });

  it('should add a card to a column', () => {
    const column = generateRandomKanbanColumn();
    const card = generateRandomKanbanCard();

    const totalCards = column.cards.length;
    const updatedColumn = addCard({ column, card });

    const expected = totalCards + 1;
    expect(updatedColumn.cards).toHaveLength(expected);
  });

  it('should add the card to the end of the column', () => {
    const column = generateRandomKanbanColumn();
    const card = generateRandomKanbanCard();

    const updatedColumn = addCard({ column, card });
    const expected = updatedColumn.cards[updatedColumn.cards.length - 1];

    expect(card).toEqual(expected);
  });

  it('should return the same column if card is duplicated', () => {
    const column = generateRandomKanbanColumn();
    const card = column.cards[0];

    const updatedColumn = addCard({ column, card });

    expect(updatedColumn).toEqual(column);
  });
});

describe('updateKanbanColumn', () => {
  it('should return a column', () => {
    const column = generateRandomKanbanColumn();

    const newColumnProps = generateRandomKanbanCard() as Partial<KanbanColumn>;
    delete newColumnProps.id;

    const updatedColumn = updateKanbanColumn({ column, newColumnProps });

    assertType<KanbanColumn>(updatedColumn);
  });

  it('should correctly update a column', () => {
    const column = generateRandomKanbanColumn();

    const newColumnProps = generateRandomKanbanCard() as Partial<KanbanColumn>;
    delete newColumnProps.id;

    const updatedColumn = updateKanbanColumn({ column, newColumnProps });
    expect(updatedColumn.id).toEqual(column.id);
    expect(updatedColumn.title).toEqual(newColumnProps.title);
  });
});

describe('removeCardById', () => {
  it('should remove the correct card', () => {
    const column = generateRandomKanbanColumn();
    const card = column.cards[0];

    const updatedColumn = removeCardById({
      column,
      cardId: card.id,
    });

    expect(updatedColumn.cards).not.toContain(card);
  });

  it('should return the same column if the card is not found', () => {
    const column = generateRandomKanbanColumn();

    const updatedColumn = removeCardById({
      column,
      cardId: 'any',
    });
    expect(updatedColumn).toEqual(column);
  });
});

describe('changeCardOrder', () => {
  it('should move a card from one index to another', () => {
    const column = generateRandomKanbanColumn({ cardsLength: 5 });

    const from = 1;
    const to = 3;

    const updatedColumn = changeCardOrder({ column, from, to });

    expect(updatedColumn.cards.length).toEqual(column.cards.length);
    expect(updatedColumn.cards[3]).toEqual(column.cards[1]);
  });

  it('should return the same card if both indexes are the same', () => {
    const column = generateRandomKanbanColumn({ cardsLength: 5 });

    const from = 2;
    const to = 2;

    const updatedColumn = changeCardOrder({ column, from, to });

    expect(updatedColumn).toEqual(column);
  });
});

describe('getColumnById', () => {
  it('should return a column if it belongs to the list', () => {
    const columns = generateRandomKanbanColumnArray();

    const columnId = columns[0].id;
    const expected = getColumnById({ columns, columnId });

    expect(expected).toBeTruthy();
    expect(expected?.column.id).toEqual(columnId);
  });

  it('should return a column index if it belongs to the list', () => {
    const columns = generateRandomKanbanColumnArray();

    const columnId = columns[0].id;
    const expected = getColumnById({ columns, columnId });

    expect(expected).toBeTruthy();
    expect(expected?.index).toEqual(0);
  });

  it('should return undefined if the id does not belongs the list', () => {
    const columns = generateRandomKanbanColumnArray();

    const columnId = 'anyId';
    const expected = getColumnById({ columns, columnId });

    expect(expected).toBeUndefined();
  });
});
