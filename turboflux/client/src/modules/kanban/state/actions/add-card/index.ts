import { KanbanCardInput } from '../../../entities/kanban-card';
import { KanbanColumn } from '../../../entities/kanban-column';
import {
  addCardToColumnUseCase,
  updateColumnFromBoardUseCase,
} from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type AddCardPayload = {
  column: KanbanColumn;
  cardProps: KanbanCardInput;
};

export const addCard = (state: KanbanState, payload: AddCardPayload) => {
  const { column, cardProps } = payload;
  const { id: columnId, ...newColumnProps } = addCardToColumnUseCase({
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
