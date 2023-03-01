import {
  generateRandomKanbanColumnArray,
  generateRandomKanbanColumnInputArray,
} from '../../kanban-column/factories';
import { KanbanBoard, KanbanBoardInput } from '../entity';

type GenerateRandomKanbanBoardInputOptions = Partial<KanbanBoardInput> & {
  columnsLength?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanBoardInput = (
  options?: GenerateRandomKanbanBoardInputOptions
): KanbanBoardInput => {
  const numColumns = options?.columnsLength;

  return {
    columns:
      options?.columns ||
      generateRandomKanbanColumnInputArray({ columns: numColumns }),
  };
};

type GenerateRandomKanbanBoardOptions = Partial<KanbanBoard> & {
  columnsLength?: number;
};

/**
 * This factory is intended to be used by tests only.
 */
export const generateRandomKanbanBoard = (
  options?: GenerateRandomKanbanBoardOptions
): KanbanBoard => {
  const numColumns = options?.columnsLength;

  return {
    columns:
      options?.columns ||
      generateRandomKanbanColumnArray({ columns: numColumns }),
  };
};
