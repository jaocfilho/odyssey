import { createKanbanCard, KanbanCardInput } from '../../entities/kanban-card';
import { addCard, KanbanColumn } from '../../entities/kanban-column';

type AddCardToColumnUseCaseParams = {
  column: KanbanColumn;
  cardProps: KanbanCardInput;
};

export const addCardToColumnUseCase = ({
  column,
  cardProps,
}: AddCardToColumnUseCaseParams): KanbanColumn => {
  const card = createKanbanCard({ cardProps });
  return addCard({ column, card });
};
