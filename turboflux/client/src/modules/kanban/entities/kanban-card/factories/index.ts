import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import { KanbanCard, KanbanCards } from '../entity';

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

type GenerateRandomKanbanCardArrayOptions = {
  cards?: number;
};

export const generateRandomKanbanCardArray = (
  options?: GenerateRandomKanbanCardArrayOptions
) => {
  const numCards = options?.cards;

  return mapRange(
    () => generateRandomKanbanCard(),
    numCards || 4
  ) as KanbanCards;
};
