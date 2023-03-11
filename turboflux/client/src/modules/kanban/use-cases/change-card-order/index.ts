import { KanbanColumn, moveCard } from '../../entities/kanban-column';

type ChangeCardOrderUseCaseParams = {
  column: KanbanColumn;
  from: number;
  to: number;
};

export const changeCardOrderUseCase = ({
  column,
  from,
  to,
}: ChangeCardOrderUseCaseParams) => {
  return moveCard({ column, from, to });
};
