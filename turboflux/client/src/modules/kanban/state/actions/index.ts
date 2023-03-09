import { AddCardPayload } from './add-card';
import { AddColumnPayload } from './add-column';
import { RemoveCardPayload } from './remove-card';
import { RemoveColumnPayload } from './remove-column';

export type CreateColumnAction = {
  type: 'ADD_COLUMN';
  payload: AddColumnPayload;
};

export type RemoveColumnAction = {
  type: 'REMOVE_COLUMN';
  payload: RemoveColumnPayload;
};

export type AddCardAction = {
  type: 'ADD_CARD';
  payload: AddCardPayload;
};

export type RemoveCardAction = {
  type: 'REMOVE_CARD';
  payload: RemoveCardPayload;
};

export type KanbanReducerAction =
  | CreateColumnAction
  | RemoveColumnAction
  | AddCardAction
  | RemoveCardAction;
