import { KanbanColumn } from '../../entities/kanban-column';

type MoveCardUseCaseParams = {
  originColumn: KanbanColumn;
  targetColumn: KanbanColumn;
  cardId: string;
};

export const moveCardUseCase = () => {};
