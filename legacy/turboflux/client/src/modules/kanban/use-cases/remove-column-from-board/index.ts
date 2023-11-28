import { KanbanBoard, removeColumnById } from '../../entities/kanban-board';

type RemoveColumnFromBoardUseCaseParams = {
  board: KanbanBoard;
  columnId: string;
};

export const removeColumnFromBoardUseCase = ({
  board,
  columnId,
}: RemoveColumnFromBoardUseCaseParams): KanbanBoard => {
  return removeColumnById({ board, columnId });
};
