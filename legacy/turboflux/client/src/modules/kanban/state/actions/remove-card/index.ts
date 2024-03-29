import { KanbanColumn, removeCardById } from '../../../entities/kanban-column';
import { updateColumnFromBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type RemoveCardPayload = {
  cardId: string;
  column: KanbanColumn;
};

export const removeCard = (
  state: KanbanState,
  { cardId, column }: RemoveCardPayload
) => {
  const { id: columnId, ...newColumnProps } = removeCardById({
    cardId,
    column,
  });

  const updatedBoard = updateColumnFromBoardUseCase({
    board: state.board,
    columnId,
    newColumnProps,
  });

  state.board = updatedBoard;
};
