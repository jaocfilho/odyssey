import { AddColumnPayload } from './add-column';
import { RemoveColumnPayload } from './remove-column';

export type CreateColumnAction = {
  type: 'CREATE_COLUMN';
  payload: AddColumnPayload;
};

export type RemoveColumnAction = {
  type: 'REMOVE_COLUMN';
  payload: RemoveColumnPayload;
};

export type KanbanReducerAction = CreateColumnAction | RemoveColumnAction;
