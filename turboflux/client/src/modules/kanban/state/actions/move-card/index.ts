import { getColumnUseCase, moveCardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export interface MoveCardPayload {
  cardId: string;
  targetIndex: number;
  originColumnId: string;
  targetColumnId: string;
}

export const moveCard = (
  state: KanbanState,
  { cardId, originColumnId, targetColumnId, targetIndex }: MoveCardPayload
) => {
  const origin = getColumnUseCase({
    board: state.board,
    columnId: originColumnId,
  });

  const target = getColumnUseCase({
    board: state.board,
    columnId: targetColumnId,
  });

  if (!origin || !target) {
    return;
  }

  const { column: originColumn, index: originColumnIndex } = origin;
  const { column: targetColumn, index: targetColumnIndex } = target;

  const { updatedOriginColumn, updatedTargetColumn } = moveCardUseCase({
    cardId,
    originColumn,
    targetColumn,
    targetIndex,
  });

  state.board.columns[originColumnIndex] = updatedOriginColumn;
  state.board.columns[targetColumnIndex] = updatedTargetColumn;
};
