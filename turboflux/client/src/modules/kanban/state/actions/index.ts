import { AddCardPayload } from './add-card';
import { AddColumnPayload } from './add-column';
import { MoveColumnPayload } from './move-column';
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

export type MoveColumnAction = {
  type: 'MOVE_COLUMN';
  payload: MoveColumnPayload;
};

export type KanbanReducerAction =
  | CreateColumnAction
  | RemoveColumnAction
  | AddCardAction
  | RemoveCardAction
  | MoveColumnAction;
