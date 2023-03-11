import { changeColumnOrderUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type ChangeColumnOrderPayload = {
  from: number;
  to: number;
};

export const changeColumnOrder = (
  state: KanbanState,
  payload: ChangeColumnOrderPayload
): KanbanState => {
  const { from, to } = payload;
  const updatedBoard = changeColumnOrderUseCase({
    board: state.board,
    from,
    to,
  });

  return { ...state, board: updatedBoard };
};
