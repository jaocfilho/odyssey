import { CreateColumnPayload } from './create-column';

type CreateColumn = {
  type: 'CREATE_COLUMN';
  payload: CreateColumnPayload;
};

export type Action = CreateColumn;
