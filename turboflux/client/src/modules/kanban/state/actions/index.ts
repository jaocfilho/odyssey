import { AddCardPayload } from './add-card';
import { AddColumnPayload } from './add-column';
import { ChangeCardOrderPayload } from './change-card-order';
import { ChangeColumnOrderPayload } from './change-column-order';
import { MoveCardPayload } from './move-card';
import { RemoveCardPayload } from './remove-card';
import { RemoveColumnPayload } from './remove-column';
import { UpdateCardPayload } from './update-card';
import { UpdateColumnPayload } from './update-column';

export { type AddCardPayload } from './add-card';
export { type AddColumnPayload } from './add-column';
export { type ChangeCardOrderPayload } from './change-card-order';
export { type ChangeColumnOrderPayload } from './change-column-order';
export { type MoveCardPayload } from './move-card';
export { type RemoveCardPayload } from './remove-card';
export { type RemoveColumnPayload } from './remove-column';
export { type UpdateCardPayload } from './update-card';
export { type UpdateColumnPayload } from './update-column';

export type AddColumnAction = {
  type: 'ADD_COLUMN';
  payload: AddColumnPayload;
};

export type RemoveColumnAction = {
  type: 'REMOVE_COLUMN';
  payload: RemoveColumnPayload;
};

export type ChangeColumnOrderAction = {
  type: 'CHANGE_COLUMN_ORDER';
  payload: ChangeColumnOrderPayload;
};

export type UpdateColumnAction = {
  type: 'UPDATE_COLUMN';
  payload: UpdateColumnPayload;
};

export type AddCardAction = {
  type: 'ADD_CARD';
  payload: AddCardPayload;
};

export type RemoveCardAction = {
  type: 'REMOVE_CARD';
  payload: RemoveCardPayload;
};

export type ChangeCardOrderAction = {
  type: 'CHANGE_CARD_ORDER';
  payload: ChangeCardOrderPayload;
};

export type MoveCardAction = {
  type: 'MOVE_CARD';
  payload: MoveCardPayload;
};

export type UpdateCardAction = {
  type: 'UPDATE_CARD';
  payload: UpdateCardPayload;
};

export type KanbanReducerAction =
  | AddColumnAction
  | RemoveColumnAction
  | AddCardAction
  | RemoveCardAction
  | ChangeColumnOrderAction
  | ChangeCardOrderAction
  | MoveCardAction
  | UpdateCardAction
  | UpdateColumnAction;
