import { describe, it, expect, vi } from 'vitest';

import { kanbanStateReducer } from '.';
import {
  generateRandomKanbanColumn,
  generateRandomKanbanColumnInput,
} from '../../entities/kanban-column';
import {
  CreateColumnAction,
  RemoveColumnAction,
  AddCardAction,
  RemoveCardAction,
} from '../actions';
import { generateRandomKanbanState } from '../factories';
import { addColumn } from '../actions/add-column';
import { removeColumn } from '../actions/remove-column';
import { addCard } from '../actions/add-card';
import { removeCard } from '../actions/remove-card';
import { generateRandomKanbanCardInput } from '../../entities/kanban-card';

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

describe('kanbanStateReducer', () => {
  it('should call addColumn when action is ADD_COLUMN', () => {
    const draft = generateRandomKanbanState();
    const columnProps = generateRandomKanbanColumnInput();

    const action: CreateColumnAction = {
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
    const cardProps = generateRandomKanbanCardInput();

    const action: AddCardAction = {
      type: 'ADD_CARD',
      payload: { column, cardProps },
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
});
