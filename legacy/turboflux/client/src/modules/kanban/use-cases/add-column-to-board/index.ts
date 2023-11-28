import { addColumn, KanbanBoard } from '../../entities/kanban-board';
import {
  createKanbanColumn,
  KanbanColumnInput,
} from '../../entities/kanban-column';

type AddColumnToBoardUseCaseParams = {
  board: KanbanBoard;
  columnProps: KanbanColumnInput;
};

export const addColumnToBoardUseCase = ({
  board,
  columnProps,
}: AddColumnToBoardUseCaseParams): KanbanBoard => {
  const column = createKanbanColumn({ columnProps });
  return addColumn({ board, column });
};
