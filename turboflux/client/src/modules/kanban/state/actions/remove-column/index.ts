import { removeColumnFromBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type RemoveColumnPayload = {
  columnId: string;
};

export const removeColumn = (
  state: KanbanState,
  payload: RemoveColumnPayload
) => {
  const updatedBoard = removeColumnFromBoardUseCase({
    board: state.board,
    columnId: payload.columnId,
  });

  state.board = updatedBoard;
};
