import { KanbanBoard } from '../../entities/kanban-board';
import { getColumnById } from '../../entities/kanban-column';

type GetColumnUseCaseParams = {
  board: KanbanBoard;
  columnId: string;
};

export const getColumnUseCase = ({
  board,
  columnId,
}: GetColumnUseCaseParams) => {
  const { columns } = board;
  return getColumnById({ columns, columnId });
};
