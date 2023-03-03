import { CreateColumnPayload } from './create-column';

export type CreateColumnAction = {
  type: 'CREATE_COLUMN';
  payload: CreateColumnPayload;
};

export type KanbanReducerAction = CreateColumnAction;
