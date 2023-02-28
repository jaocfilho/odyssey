import { describe, expect, it, vi } from 'vitest';

import { KanbanCard, kanbanCardSchema } from '../entity';
import { generateRandomKanbanCard } from '../factories';
import { createKanbanCard, updateKanbanCard } from '.';

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
