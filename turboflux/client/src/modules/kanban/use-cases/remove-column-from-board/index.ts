import { KanbanBoard, removeColumnById } from '../../entities/kanban-board';

type removeColumnFromBoardUseCaseParams = {
  board: KanbanBoard;
  columnId: string;
};

export const removeColumnFromBoardUseCase = ({
  board,
  columnId,
}: removeColumnFromBoardUseCaseParams): KanbanBoard => {
  return removeColumnById({ board, columnId });
};
