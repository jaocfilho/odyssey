import {
  getCardById,
  NewCardProps,
  updateKanbanCard,
} from '../../entities/kanban-card';
import { KanbanColumn } from '../../entities/kanban-column';

type UpdateCardFromColumnUseCaseParams = {
  column: KanbanColumn;
  cardId: string;
  newCardProps: NewCardProps;
};

export const updateCardFromColumnUseCase = ({
  column,
  cardId,
  newCardProps,
}: UpdateCardFromColumnUseCaseParams): KanbanColumn => {
  const query = getCardById({ cardId, cards: column.cards });
  if (query === undefined) return column;

  const columnToUpdate = column;

  const { card, index } = query;
  const updatedCard = updateKanbanCard({ card, newCardProps });

  columnToUpdate.cards[index] = updatedCard;

  return columnToUpdate;
};
