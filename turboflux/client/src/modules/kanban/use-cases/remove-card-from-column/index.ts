import { KanbanColumn, removeCardById } from '../../entities/kanban-column';

type RemoveCardFromColumnUseCaseParams = {
  column: KanbanColumn;
  cardId: string;
};

export const removeCardFromColumnUseCase = ({
  column,
  cardId,
}: RemoveCardFromColumnUseCaseParams): KanbanColumn => {
  return removeCardById({ column, cardId });
};
