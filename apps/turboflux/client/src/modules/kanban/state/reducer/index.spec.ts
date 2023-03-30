import { describe, it, expect, vi } from 'vitest';

import { kanbanStateReducer } from '.';
import {
  generateRandomKanbanColumn,
  generateRandomKanbanColumnInput,
} from '../../entities/kanban-column';
import {
  AddColumnAction,
  RemoveColumnAction,
  AddCardAction,
  RemoveCardAction,
  ChangeColumnOrderAction,
  ChangeCardOrderAction,
  MoveCardAction,
  UpdateCardAction,
  UpdateColumnAction,
} from '../actions';
import { generateRandomKanbanState } from '../factories';
import { addColumn } from '../actions/add-column';
import { removeColumn } from '../actions/remove-column';
import { addCard } from '../actions/add-card';
import { removeCard } from '../actions/remove-card';
import { changeColumnOrder } from '../actions/change-column-order';
import {
  generateRandomKanbanCard,
  generateRandomKanbanCardInput,
} from '../../entities/kanban-card';
import { changeCardOrder } from '../actions/change-card-order';
import { moveCard } from '../actions/move-card';
import { updateCard } from '../actions/update-card';
import { updateColumn } from '../actions/update-column';

vi.mock('../actions/add-column', () => ({
  addColumn: vi.fn(),
}));

vi.mock('../actions/remove-column', () => ({
  removeColumn: vi.fn(),
}));

vi.mock('../actions/add-card', () => ({
  addCard: vi.fn(),
}));

vi.mock('../actions/remove-card', () => ({
  removeCard: vi.fn(),
}));

vi.mock('../actions/change-column-order', () => ({
  changeColumnOrder: vi.fn(),
}));

vi.mock('../actions/change-card-order', () => ({
  changeCardOrder: vi.fn(),
}));

vi.mock('../actions/move-card', () => ({
  moveCard: vi.fn(),
}));

vi.mock('../actions/update-card', () => ({
  updateCard: vi.fn(),
}));

vi.mock('../actions/update-column', () => ({
  updateColumn: vi.fn(),
}));

describe('kanbanStateReducer', () => {
  it('should call addColumn when action is ADD_COLUMN', () => {
    const draft = generateRandomKanbanState();
    const columnProps = generateRandomKanbanColumnInput();

    const action: AddColumnAction = {
      type: 'ADD_COLUMN',
      payload: { columnProps },
    };

    kanbanStateReducer(draft, action);

    expect(addColumn).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call removeColumn when action is REMOVE_COLUMN', () => {
    const draft = generateRandomKanbanState();

    const action: RemoveColumnAction = {
      type: 'REMOVE_COLUMN',
      payload: { columnId: 'any' },
    };

    kanbanStateReducer(draft, action);

    expect(removeColumn).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call addCard when action is ADD_CARD', () => {
    const draft = generateRandomKanbanState();

    const column = generateRandomKanbanColumn();
    const columnId = column.id;
    const cardProps = generateRandomKanbanCardInput();

    const action: AddCardAction = {
      type: 'ADD_CARD',
      payload: { columnId, cardProps },
    };

    kanbanStateReducer(draft, action);

    expect(addCard).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call removeCard when action is REMOVE_CARD', () => {
    const draft = generateRandomKanbanState();

    const column = generateRandomKanbanColumn();
    const cardId = column.cards[0].id;

    const action: RemoveCardAction = {
      type: 'REMOVE_CARD',
      payload: { column, cardId },
    };

    kanbanStateReducer(draft, action);

    expect(removeCard).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call moveColumn when action is CHANGE_COLUMN_ORDER', () => {
    const draft = generateRandomKanbanState();

    const action: ChangeColumnOrderAction = {
      type: 'CHANGE_COLUMN_ORDER',
      payload: { from: 0, to: 1 },
    };

    kanbanStateReducer(draft, action);

    expect(changeColumnOrder).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call changeCardOrder when action is CHANGE_CARD_ORDER', () => {
    const draft = generateRandomKanbanState();

    const column = draft.board.columns[0];
    const columnId = column.id;

    const action: ChangeCardOrderAction = {
      type: 'CHANGE_CARD_ORDER',
      payload: { columnId, from: 0, to: 0 },
    };

    kanbanStateReducer(draft, action);

    expect(changeCardOrder).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call moveCard when action is MOVE_CARD', () => {
    const draft = generateRandomKanbanState();

    const originColumn = draft.board.columns[0];
    const originColumnId = originColumn.id;

    const lastIndex = draft.board.columns.length - 1;
    const targetColumn = draft.board.columns[lastIndex];
    const targetColumnId = targetColumn.id;

    const cardId = originColumn.cards[0].id;
    const targetIndex = 0;

    const action: MoveCardAction = {
      type: 'MOVE_CARD',
      payload: { cardId, originColumnId, targetColumnId, targetIndex },
    };

    kanbanStateReducer(draft, action);

    expect(moveCard).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call updateCard when action is UPDATE_CARD', () => {
    const draft = generateRandomKanbanState();

    const columnId = draft.board.columns[0].id;
    const cardId = draft.board.columns[0].cards[0].id;
    const { id, ...newCardProps } = generateRandomKanbanCard();

    const action: UpdateCardAction = {
      type: 'UPDATE_CARD',
      payload: { cardId, columnId, newCardProps },
    };

    kanbanStateReducer(draft, action);

    expect(updateCard).toHaveBeenCalledWith(draft, action.payload);
  });

  it('should call updateColumn when action is UPDATE_COLUMN', () => {
    const draft = generateRandomKanbanState();
    const columnId = draft.board.columns[0].id;
    const { id, ...newColumnProps } = generateRandomKanbanColumn();

    const action: UpdateColumnAction = {
      type: 'UPDATE_COLUMN',
      payload: { columnId, newColumnProps },
    };

    kanbanStateReducer(draft, action);

    expect(updateColumn).toHaveBeenCalledWith(draft, action.payload);
  });
});
