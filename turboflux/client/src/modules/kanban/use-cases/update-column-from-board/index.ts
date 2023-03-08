import { KanbanBoard } from '../../entities/kanban-board';
import {
  KanbanColumn,
  updateKanbanColumn,
  getColumnById,
} from '../../entities/kanban-column';

type NewColumnProps = Omit<Partial<KanbanColumn>, 'id'>;
type UpdateColumnFromBoardUseCaseParams = {
  board: KanbanBoard;
  columnId: string;
  newColumnProps: NewColumnProps;
};

export const updateColumnFromBoardUseCase = ({
  board,
  columnId,
  newColumnProps,
}: UpdateColumnFromBoardUseCaseParams): KanbanBoard => {
  const query = getColumnById({ columns: board.columns, columnId });

  if (query === undefined) return board;
  const boardToUpdate = board;

  const { column, index } = query;
  const updatedColumn = updateKanbanColumn({ column, newColumnProps });

  boardToUpdate.columns[index] = updatedColumn;

  return boardToUpdate;
};
