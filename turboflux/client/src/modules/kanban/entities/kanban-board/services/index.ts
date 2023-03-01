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

type AddColumnToKanbanBoardParams = {
  board: KanbanBoard;
  column: KanbanColumn;
};

export const addColumnToKanbanBoard = ({
  board,
  column,
}: AddColumnToKanbanBoardParams) => {
  return produce(board, (draft) => {
    draft.columns.push(column);
  });
};
