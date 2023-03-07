import { describe, assertType, it, expect } from 'vitest';

import { moveCardUseCase } from '.';
import {
  generateRandomKanbanColumn,
  KanbanColumn,
} from '../../entities/kanban-column';

describe('moveCardUseCase', () => {
  it('should move a card from one index to another', () => {
    const column = generateRandomKanbanColumn({ cardsLength: 5 });

    const from = 1;
    const to = 3;

    const updatedColumn = moveCardUseCase({ column, from, to });

    expect(updatedColumn.cards.length).toEqual(column.cards.length);
    expect(updatedColumn.cards[3]).toEqual(column.cards[1]);
  });

  it('should return the same column if both indexes are the same', () => {
    const column = generateRandomKanbanColumn({ cardsLength: 5 });

    const from = 2;
    const to = 2;

    const updatedColumn = moveCardUseCase({ column, from, to });

    expect(updatedColumn).toEqual(column);
  });

  it('should return a kanban column', () => {
    const column = generateRandomKanbanColumn({ cardsLength: 5 });

    const from = 2;
    const to = 2;

    const updatedColumn = moveCardUseCase({ column, from, to });

    assertType<KanbanColumn>(updatedColumn);
  });
});
