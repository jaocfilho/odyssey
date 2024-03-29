import { KanbanColumnInput } from '../../../entities/kanban-column';
import { addColumnToBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type AddColumnPayload = {
  columnProps: KanbanColumnInput;
};

export const addColumn = (
  state: KanbanState,
  { columnProps }: AddColumnPayload
) => {
  const updatedBoard = addColumnToBoardUseCase({
    board: state.board,
    columnProps: columnProps,
  });

  state.board = updatedBoard;
};
