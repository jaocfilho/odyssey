import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import { KanbanCard, KanbanCardInput, KanbanCards } from '../entity';

type GenerateRandomKanbanCardInputOptions = Partial<KanbanCardInput>;

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanCardInput = (
  options?: GenerateRandomKanbanCardInputOptions
): KanbanCardInput => {
  return {
    id: options?.id || faker.datatype.uuid(),
    title: options?.title || faker.lorem.words(),
  };
};

type GenerateRandomKanbanCardInputArrayOptions = {
  cards?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanCardInputArray = (
  options?: GenerateRandomKanbanCardInputArrayOptions
) => {
  const numCards = options?.cards;

  return mapRange(
    () => generateRandomKanbanCardInput(),
    numCards || faker.datatype.number({ min: 1, max: 4 })
  ) as KanbanCardInput[];
};

type GenerateRandomKanbanCardOptions = Partial<KanbanCard>;

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanCard = (
  options?: GenerateRandomKanbanCardOptions
): KanbanCard => {
  return {
    id: options?.id || faker.datatype.uuid(),
    title: options?.title || faker.lorem.words(),
  };
};

type GenerateRandomKanbanCardArrayOptions = {
  cards?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanCardArray = (
  options?: GenerateRandomKanbanCardArrayOptions
) => {
  const numCards = options?.cards;

  return mapRange(
    () => generateRandomKanbanCard(),
    numCards || faker.datatype.number({ min: 1, max: 4 })
  ) as KanbanCards;
};
