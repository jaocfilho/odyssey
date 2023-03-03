import { KanbanBoard } from '../../entities/kanban-board';
import { InvalidKanbanReducerActionError } from '../../errors';
import { KanbanReducerAction } from '../actions';
import { createColumn } from '../actions/create-column';
import { removeColumn } from '../actions/remove-column';

export type KanbanState = {
  board: KanbanBoard;
};

export const kanbanStateReducer = (
  draft: KanbanState,
  action: KanbanReducerAction
) => {
  switch (action.type) {
    case 'CREATE_COLUMN':
      const createColumnPayload = action.payload;
      createColumn(draft, createColumnPayload);
      break;

    case 'REMOVE_COLUMN':
      const removeColumnPayload = action.payload;
      removeColumn(draft, removeColumnPayload);
      break;

    default:
      throw new InvalidKanbanReducerActionError();
  }
};
