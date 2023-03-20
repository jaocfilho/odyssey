import { NewColumnProps } from '../../../entities/kanban-column';
import { updateColumnFromBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type UpdateColumnPayload = {
  columnId: string;
  newColumnProps: NewColumnProps;
};

export const updateColumn = (
  state: KanbanState,
  { columnId, newColumnProps }: UpdateColumnPayload
) => {
  const updatedBoard = updateColumnFromBoardUseCase({
    board: state.board,
    columnId,
    newColumnProps,
  });

  state.board = updatedBoard;
};
