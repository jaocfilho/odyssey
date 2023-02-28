import { faker } from '@faker-js/faker';

import { generateRandomKanbanCardArray } from '../../kanban-card/factories';
import { KanbanColumn } from '../entity';

type GenerateRandomKanbanColumnOptions = Partial<KanbanColumn> & {
  cardsLength?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanColumn = (
  options?: GenerateRandomKanbanColumnOptions
): KanbanColumn => {
  const numCards = options?.cardsLength;

  return {
    id: options?.id || faker.datatype.uuid(),
    title: options?.title || faker.lorem.words(),
    cards: options?.cards || generateRandomKanbanCardArray({ cards: numCards }),
  };
};
