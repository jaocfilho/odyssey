import { faker } from '@faker-js/faker';

import { mapRange } from 'satellite';

import {
  generateRandomKanbanCardArray,
  generateRandomKanbanCardInputArray,
} from '../../kanban-card/factories';
import { KanbanColumn, KanbanColumnInput } from '../entity';

type GenerateRandomKanbanColumnInputOptions = Partial<KanbanColumnInput> & {
  cardsLength?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanColumnInput = (
  options?: GenerateRandomKanbanColumnInputOptions
): KanbanColumnInput => {
  const numCards = options?.cardsLength;

  return {
    id: options?.id || faker.datatype.uuid(),
    title: options?.title || faker.lorem.words(),
    cards:
      options?.cards || generateRandomKanbanCardInputArray({ cards: numCards }),
  };
};

type GenerateRandomKanbanColumnInputArrayOptions = {
  columns?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanColumnInputArray = (
  options?: GenerateRandomKanbanColumnInputArrayOptions
) => {
  const numColumns = options?.columns;

  return mapRange(
    () => generateRandomKanbanColumnInput(),
    numColumns || faker.datatype.number({ min: 1, max: 4 })
  ) as KanbanColumnInput[];
};

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

type GenerateRandomKanbanColumnArrayOptions = {
  columns?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanColumnArray = (
  options?: GenerateRandomKanbanColumnArrayOptions
) => {
  const numColumns = options?.columns;

  return mapRange(
    () => generateRandomKanbanColumn(),
    numColumns || faker.datatype.number({ min: 1, max: 4 })
  ) as KanbanColumn[];
};
