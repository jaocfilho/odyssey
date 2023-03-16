import { describe, expect, it, vi } from 'vitest';

import { KanbanCard, kanbanCardSchema } from '../entity';
import {
  generateRandomKanbanCard,
  generateRandomKanbanCardArray,
} from '../factories';
import { createKanbanCard, getCardById, updateKanbanCard } from '.';

describe('createKanbanCard', () => {
  it('should return a valid kanban card when given valid input', () => {
    const cardProps = generateRandomKanbanCard();

    const parseSpy = vi.spyOn(kanbanCardSchema, 'parse');
    createKanbanCard({ cardProps });

    expect(parseSpy).toHaveBeenCalledWith(cardProps);

    parseSpy.mockRestore();
  });
});

describe('updateKanbanCard', () => {
  it('should correctly update a card', () => {
    const card = generateRandomKanbanCard();

    const newCardProps = generateRandomKanbanCard() as Partial<KanbanCard>;
    delete newCardProps.id;

    const updatedCard = updateKanbanCard({ card, newCardProps });
    expect(updatedCard.id).toEqual(card.id);
    expect(updatedCard.title).toEqual(newCardProps.title);
  });
});

describe('getCardById', () => {
  it('should return a card if it belongs to the list', () => {
    const cards = generateRandomKanbanCardArray();

    const cardId = cards[0].id;
    const expected = getCardById({ cardId, cards });

    expect(expected).toBeTruthy();
    expect(expected?.card.id).toEqual(cardId);
  });

  it('should return a card index if it belongs to the list', () => {
    const cards = generateRandomKanbanCardArray();

    const cardId = cards[0].id;
    const expected = getCardById({ cardId, cards });

    expect(expected).toBeTruthy();
    expect(expected?.index).toEqual(0);
  });

  it('should return undefined if the id does not belongs the list', () => {
    const cards = generateRandomKanbanCardArray();

    const cardId = 'anyId';
    const expected = getCardById({ cardId, cards });

    expect(expected).toBeUndefined();
  });
});
