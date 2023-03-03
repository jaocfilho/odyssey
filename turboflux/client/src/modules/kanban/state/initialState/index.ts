import { createKanbanBoard } from '../../entities/kanban-board';
import { KanbanState } from '../reducer';

const board = createKanbanBoard({ boardProps: {} });

export const kanbanInitialState: KanbanState = {
  board,
};
