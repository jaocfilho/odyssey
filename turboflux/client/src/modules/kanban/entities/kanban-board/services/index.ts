import { KanbanBoardInput, kanbanBoardSchema } from '../entity';

type CreateKanbanBoardParams = {
  boardProps: KanbanBoardInput;
};

export const createKanbanBoard = ({ boardProps }: CreateKanbanBoardParams) => {
  const kanbanBoard = kanbanBoardSchema.parse(boardProps);

  return kanbanBoard;
};
