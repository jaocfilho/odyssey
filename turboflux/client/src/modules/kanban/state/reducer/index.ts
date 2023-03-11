import { KanbanBoard } from '../../entities/kanban-board';
import { InvalidKanbanReducerActionError } from '../../errors';
import { KanbanReducerAction } from '../actions';
import { addCard } from '../actions/add-card';
import { addColumn } from '../actions/add-column';
import { changeColumnOrder } from '../actions/change-column-order';
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

    case 'CHANGE_COLUMN_ORDER':
      const changeColumnOrderPayload = action.payload;
      changeColumnOrder(draft, changeColumnOrderPayload);
      break;

    default:
      throw new InvalidKanbanReducerActionError();
  }
};
