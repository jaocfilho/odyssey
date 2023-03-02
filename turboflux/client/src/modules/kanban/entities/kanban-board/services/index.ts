import produce from 'immer';

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

export const addColumn = ({ board, column }: AddColumnParams) => {
  return produce(board, (draft) => {
    draft.columns.push(column);
  });
};

type RemoveColumnByIdParams = {
  board: KanbanBoard;
  columnId: string;
};

export const removeColumnById = ({
  board,
  columnId,
}: RemoveColumnByIdParams) => {
  return produce(board, (draft) => {
    const index = draft.columns.findIndex((todo) => todo.id === columnId);
    if (index !== -1) draft.columns.splice(index, 1);
  });
};
