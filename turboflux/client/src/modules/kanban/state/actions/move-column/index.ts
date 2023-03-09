import { moveColumnUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type MoveColumnPayload = {
  from: number;
  to: number;
};

export const moveColumn = (
  state: KanbanState,
  payload: MoveColumnPayload
): KanbanState => {
  const { from, to } = payload;
  const updatedBoard = moveColumnUseCase({ board: state.board, from, to });

  return { ...state, board: updatedBoard };
};
