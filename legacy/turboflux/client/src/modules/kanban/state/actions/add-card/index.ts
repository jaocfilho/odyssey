import { KanbanCardInput } from '../../../entities/kanban-card';
import {
  addCardToColumnUseCase,
  getColumnUseCase,
  updateColumnFromBoardUseCase,
} from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type AddCardPayload = {
  columnId: string;
  cardProps: KanbanCardInput;
};

export const addCard = (
  state: KanbanState,
  { columnId, cardProps }: AddCardPayload
) => {
  const query = getColumnUseCase({ board: state.board, columnId });

  if (!query) return;

  const { column } = query;
  const { id, ...newColumnProps } = addCardToColumnUseCase({
    column,
    cardProps,
  });

  const updatedBoard = updateColumnFromBoardUseCase({
    board: state.board,
    columnId,
    newColumnProps,
  });

  state.board = updatedBoard;
};
