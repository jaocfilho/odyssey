import produce from 'immer';

import {
  kanbanStateReducer,
  KanbanState,
  KanbanReducerAction,
} from '../../../state';

export const reducer = produce(
  (draft: KanbanState, action: KanbanReducerAction) =>
    kanbanStateReducer(draft, action)
);
