import { KanbanBoard } from '../../entities/kanban-board';
import { InvalidKanbanReducerActionError } from '../../errors';
import { KanbanReducerAction } from '../actions';
import { addCard } from '../actions/add-card';
import { addColumn } from '../actions/add-column';
import { moveColumn } from '../actions/move-column';
import { removeCard } from '../actions/remove-card';
import { removeColumn } from '../actions/remove-column';

export type KanbanState = {
  board: KanbanBoard;
};

export const kanbanStateReducer = (
  draft: KanbanState,
  action: KanbanReducerAction
) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      const createColumnPayload = action.payload;
      addColumn(draft, createColumnPayload);
      break;

    case 'REMOVE_COLUMN':
      const removeColumnPayload = action.payload;
      removeColumn(draft, removeColumnPayload);
      break;

    case 'ADD_CARD':
      const addCardPayload = action.payload;
      addCard(draft, addCardPayload);
      break;

    case 'REMOVE_CARD':
      const removeCardPayload = action.payload;
      removeCard(draft, removeCardPayload);
      break;

    case 'MOVE_COLUMN':
      const moveColumnPayload = action.payload;
      moveColumn(draft, moveColumnPayload);
      break;

    default:
      throw new InvalidKanbanReducerActionError();
  }
};
