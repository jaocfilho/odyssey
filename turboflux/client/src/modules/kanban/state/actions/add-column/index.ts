import { KanbanColumnInput } from '../../../entities/kanban-column';
import { addColumnToBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type AddColumnPayload = {
  columnProps: KanbanColumnInput;
};

export const addColumn = (
  draft: KanbanState,
  payload: AddColumnPayload
): KanbanState => {
  const board = addColumnToBoardUseCase({
    board: draft.board,
    columnProps: payload.columnProps,
  });

  return { ...draft, board };
};
