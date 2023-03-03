import { removeColumnFromBoardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type RemoveColumnPayload = {
  columnId: string;
};

export const removeColumn = (
  draft: KanbanState,
  payload: RemoveColumnPayload
): KanbanState => {
  const board = removeColumnFromBoardUseCase({
    board: draft.board,
    columnId: payload.columnId,
  });

  return { ...draft, board };
};
