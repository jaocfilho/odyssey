import { changeCardOrderUseCase, getColumnUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';
import { updateColumn } from '../update-column';

type ChangeCardOrderPayload = {
  columnId: string;
  from: number;
  to: number;
};

export const changeCardOrder = (
  state: KanbanState,
  { columnId, from, to }: ChangeCardOrderPayload
) => {
  const query = getColumnUseCase({ board: state.board, columnId });

  if (!query) return;

  const { column, index } = query;
  const updatedColumn = changeCardOrderUseCase({ column, from, to });

  state.board.columns[index] = updatedColumn;
};
