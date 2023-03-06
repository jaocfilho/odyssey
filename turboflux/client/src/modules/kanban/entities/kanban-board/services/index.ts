import { KanbanColumn } from '../../kanban-column';
import { KanbanBoard, KanbanBoardInput, kanbanBoardSchema } from '../entity';

type CreateKanbanBoardParams = {
  boardProps: KanbanBoardInput;
};

export const createKanbanBoard = ({ boardProps }: CreateKanbanBoardParams) => {
  const kanbanBoard = kanbanBoardSchema.parse(boardProps);

  return kanbanBoard;
};

type AddColumnParams = {
  board: KanbanBoard;
  column: KanbanColumn;
};

export const addColumn = ({ board, column }: AddColumnParams): KanbanBoard => {
  const isDuplicated = !!board.columns.find((col) => col.id === column.id);
  if (isDuplicated) return board;

  const boardToUpdate = board;
  boardToUpdate.columns.push(column);

  return boardToUpdate;
};

type RemoveColumnByIdParams = {
  board: KanbanBoard;
  columnId: string;
};

export const removeColumnById = ({
  board,
  columnId,
}: RemoveColumnByIdParams): KanbanBoard => {
  const boardToUpdate = board;

  const index = boardToUpdate.columns.findIndex(
    (column) => column.id === columnId
  );
  if (index !== -1) boardToUpdate.columns.splice(index, 1);

  return boardToUpdate;
};
