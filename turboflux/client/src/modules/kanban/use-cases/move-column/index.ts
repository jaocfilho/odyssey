import { KanbanBoard, moveColumn } from '../../entities/kanban-board';

type MoveColumnUseCaseParams = {
  board: KanbanBoard;
  from: number;
  to: number;
};

export const moveColumnUseCase = ({
  board,
  from,
  to,
}: MoveColumnUseCaseParams): KanbanBoard => {
  return moveColumn({ board, from, to });
};
