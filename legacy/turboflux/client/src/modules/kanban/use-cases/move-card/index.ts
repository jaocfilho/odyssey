import { getCardById } from '../../entities/kanban-card';
import {
  addCard,
  changeCardOrder,
  KanbanColumn,
  removeCardById,
} from '../../entities/kanban-column';

type MoveCardUseCaseParams = {
  cardId: string;
  originColumn: KanbanColumn;
  targetColumn: KanbanColumn;
  targetIndex: number;
};

type MoveCardUseCaseReturn = {
  updatedOriginColumn: KanbanColumn;
  updatedTargetColumn: KanbanColumn;
};

export const moveCardUseCase = ({
  cardId,
  originColumn,
  targetColumn,
  targetIndex,
}: MoveCardUseCaseParams): MoveCardUseCaseReturn => {
  const query = getCardById({ cardId, cards: originColumn.cards });

  if (query === undefined) {
    return {
      updatedOriginColumn: originColumn,
      updatedTargetColumn: targetColumn,
    };
  }

  const { card } = query;

  const updatedOriginColumn = removeCardById({ cardId, column: originColumn });

  let updatedTargetColumn = addCard({ card, column: targetColumn });

  const from = updatedTargetColumn.cards.length - 1;
  updatedTargetColumn = changeCardOrder({
    column: updatedTargetColumn,
    from,
    to: targetIndex,
  });

  return { updatedOriginColumn, updatedTargetColumn };
};
