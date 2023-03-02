import { KanbanBoard } from '../../entities/kanban-board';
import { InvalidKanbanReducerActionError } from '../../errors';
import { Action } from '../actions';

type KanbanBoardState = KanbanBoard;

export const kanbanStateReducer = (draft: KanbanBoardState, action: Action) => {
  switch (action.type) {
    default:
      throw new InvalidKanbanReducerActionError(action.type);
  }
};
