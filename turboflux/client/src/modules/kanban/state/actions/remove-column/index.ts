import { removeColumnFromBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type RemoveColumnPayload = {
  columnId: string;
};

export const removeColumn = (
  state: KanbanState,
  { columnId }: RemoveColumnPayload
) => {
  const updatedBoard = removeColumnFromBoardUseCase({
    board: state.board,
    columnId: columnId,
  });

  state.board = updatedBoard;
};
