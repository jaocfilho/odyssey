import { getColumnUseCase, moveCardUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type MoveCardPayload = {
  cardId: string;
  targetIndex: number;
  originColumnId: string;
  targetColumnId: string;
};

export const moveCard = (state: KanbanState, payload: MoveCardPayload) => {
  const { cardId, originColumnId, targetColumnId, targetIndex } = payload;

  const origin = getColumnUseCase({
    board: state.board,
    columnId: originColumnId,
  });

  const target = getColumnUseCase({
    board: state.board,
    columnId: targetColumnId,
  });

  const originIsUndefined = origin === undefined;
  const targetIsUndefined = target === undefined;
  const willNotUpdate = originIsUndefined || targetIsUndefined;

  if (willNotUpdate) return;

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
