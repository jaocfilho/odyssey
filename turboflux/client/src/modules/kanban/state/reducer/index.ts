import { KanbanBoard } from '../../entities/kanban-board';
import { InvalidKanbanReducerActionError } from '../../errors';
import { Action } from '../actions';
import { createColumn } from '../actions/create-column';

export type KanbanState = {
  board: KanbanBoard;
};

export const kanbanStateReducer = (draft: KanbanState, action: Action) => {
  switch (action.type) {
    case 'CREATE_COLUMN':
      const createColumnPayload = action.payload;
      createColumn(draft, createColumnPayload);
      break;

    default:
      throw new InvalidKanbanReducerActionError(action.type);
  }
};
