import { generateRandomKanbanBoard } from '../../entities/kanban-board';
import { KanbanState } from '../reducer';

type GenerateRandomKanbanStateOptions = Partial<KanbanState>;

export const generateRandomKanbanState = (
  options?: GenerateRandomKanbanStateOptions
): KanbanState => {
  return {
    board:
      options?.board ||
      generateRandomKanbanBoard({
        columns: [],
      }),
  };
};
