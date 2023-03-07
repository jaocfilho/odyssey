import { KanbanColumn, moveCard } from '../../entities/kanban-column';

type MoveCardUseCaseParams = {
  column: KanbanColumn;
  from: number;
  to: number;
};

export const moveCardUseCase = ({
  column,
  from,
  to,
}: MoveCardUseCaseParams) => {
  return moveCard({ column, from, to });
};
