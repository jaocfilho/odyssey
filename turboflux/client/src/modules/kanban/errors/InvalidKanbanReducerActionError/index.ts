import { InvalidReducerActionError } from '../../../errors';

export class InvalidKanbanReducerActionError extends InvalidReducerActionError {
  constructor() {
    super('kanban');
  }
}
