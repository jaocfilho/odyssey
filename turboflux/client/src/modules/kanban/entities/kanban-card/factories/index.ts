import { faker } from '@faker-js/faker';

import { KanbanCard } from '../entity';

type GenerateRandomKanbanCardOptions = Partial<KanbanCard>;

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanCard = (
  options?: GenerateRandomKanbanCardOptions
): KanbanCard => {
  return {
    title: options?.title || faker.lorem.words(),
  };
};
