import { KanbanBoard } from '../../entities/kanban-board';
import { InvalidKanbanReducerActionError } from '../../errors';
import { KanbanReducerAction } from '../actions';
import { addCard } from '../actions/add-card';
import { addColumn } from '../actions/add-column';
import { changeCardOrder } from '../actions/change-card-order';
import { changeColumnOrder } from '../actions/change-column-order';
import { moveCard } from '../actions/move-card';
import { removeCard } from '../actions/remove-card';
import { removeColumn } from '../actions/remove-column';
import { updateCard } from '../actions/update-card';
import { updateColumn } from '../actions/update-column';

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

    case 'CHANGE_CARD_ORDER':
      const changeCardOrderPayload = action.payload;
      changeCardOrder(draft, changeCardOrderPayload);
      break;

    case 'MOVE_CARD':
      const moveCardPayload = action.payload;
      moveCard(draft, moveCardPayload);
      break;

    case 'UPDATE_CARD':
      const updateCardPayload = action.payload;
      updateCard(draft, updateCardPayload);
      break;

    case 'UPDATE_COLUMN':
      const updateColumnPayload = action.payload;
      updateColumn(draft, updateColumnPayload);
      break;

    default:
      throw new InvalidKanbanReducerActionError();
  }
};
