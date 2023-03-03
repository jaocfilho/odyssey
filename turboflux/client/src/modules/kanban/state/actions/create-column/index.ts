import { KanbanColumnInput } from '../../../entities/kanban-column';
import { addColumnToBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type CreateColumnPayload = {
  columnProps: KanbanColumnInput;
};

export const createColumn = (
  draft: KanbanState,
  payload: CreateColumnPayload
): KanbanState => {
  const board = addColumnToBoardUseCase({
    board: draft.board,
    columnProps: payload.columnProps,
  });

  return { ...draft, board };
};
