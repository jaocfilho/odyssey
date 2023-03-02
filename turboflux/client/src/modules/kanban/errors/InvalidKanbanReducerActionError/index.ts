import { InvalidReducerActionError } from '../../../errors';

export class InvalidKanbanReducerActionError extends InvalidReducerActionError {
  constructor(actionType: string) {
    super(actionType);
  }
}
