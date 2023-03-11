import { KanbanBoard, moveColumn } from '../../entities/kanban-board';

type ChangeColumnOrderUseCaseParams = {
  board: KanbanBoard;
  from: number;
  to: number;
};

export const changeColumnOrderUseCase = ({
  board,
  from,
  to,
}: ChangeColumnOrderUseCaseParams): KanbanBoard => {
  return moveColumn({ board, from, to });
};
